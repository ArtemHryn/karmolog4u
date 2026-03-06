import { NextResponse } from 'next/server';
const apiUrl = 'https://api.novaposhta.ua/v2.0/json/';

export const dynamic = 'force-dynamic';

export const GET = async request => {
  try {
    const url = new URL(request?.url ? request.url : '');

    const cityName = url.searchParams.get('city');

    const cityReq = {
      apiKey: process.env.NOVA_POSHTA_API_KEY,
      modelName: 'Address',
      calledMethod: 'searchSettlements',
      methodProperties: { CityName: cityName, Page: 1 },
    };

    const citiesRes = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(cityReq),
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    const cities = await citiesRes.json();
    if (!cities.success) {
      return NextResponse.json({ error: cities.errors }, { status: 400 });
    }

    const addresses = cities?.data?.[0]?.Addresses || [];

    const filteredCities = addresses.map(el => ({
      value: el.DeliveryCity,
      label: el.Present,
    }));

    return NextResponse.json(
      { data: filteredCities },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
