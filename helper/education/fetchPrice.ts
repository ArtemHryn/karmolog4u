import { base_url } from '../consts';

type CourseType = 'advanced' | 'consulting' | 'ssk';

type DefaultPriceResponse = {
  price: number;
  practice?: number;
};

type SskPriceResponse = {
  prices: {
    independent: number;
    curator: number;
    sergiy: number;
  };
};

type PriceResponse = DefaultPriceResponse | SskPriceResponse;

export const fetchPrice = async (type: CourseType): Promise<PriceResponse> => {
  try {
    const res = await fetch(`${base_url}/public/education/${type}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      return type === 'ssk'
        ? {
            prices: {
              independent: 250,
              curator: 400,
              sergiy: 750,
            },
          }
        : type === 'advanced'
          ? {
              price: 1500,
            }
          : { price: 1700, practice: 50 };
    }
    return await res.json();
  } catch (e) {
    return type === 'ssk'
      ? {
          prices: {
            independent: 250,
            curator: 400,
            sergiy: 750,
          },
        }
      : type === 'advanced'
        ? {
            price: 1500,
          }
        : { price: 1700, practice: 50 };
  }
};
