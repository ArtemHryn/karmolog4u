import { base_url } from '../consts';

type CourseType = 'advanced' | 'consulting' | 'ssk';

type DefaultPriceResponse = {
  price: number;
  practicePrice?: number;
};

type SskPrice = {
  type: 'SSK_INDEPENDENT' | 'SSK_WITH_CURATOR' | 'SSK_WITH_SERGIY';
  price: number;
};

type PriceResponse = DefaultPriceResponse | SskPrice[];

export const fetchPrice = async (type: CourseType): Promise<PriceResponse> => {
  try {
    const res = await fetch(`${base_url}/public/education/${type}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return type === 'ssk'
        ? [
            { type: 'SSK_INDEPENDENT', price: 100 },
            { type: 'SSK_WITH_CURATOR', price: 200 },
            { type: 'SSK_WITH_SERGIY', price: 400 },
          ]
        : type === 'advanced'
          ? {
              price: 2500,
            }
          : { price: 1700, practicePrice: 50 };
    }
    return await res.json();
  } catch (e) {
    return type === 'ssk'
      ? [
          { type: 'SSK_INDEPENDENT', price: 100 },
          { type: 'SSK_WITH_CURATOR', price: 200 },
          { type: 'SSK_WITH_SERGIY', price: 400 },
        ]
      : type === 'advanced'
        ? {
            price: 2500,
          }
        : { price: 1700, practicePrice: 50 };
  }
};
