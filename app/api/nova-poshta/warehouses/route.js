import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const apiUrl = 'https://api.novaposhta.ua/v2.0/json/';

export const GET = async request => {
  try {
    const url = new URL(request.url);
    const warehouseId = url.searchParams.get('warehouse');
    const ln = url.searchParams.get('ln');

    if (!warehouseId) {
      return NextResponse.json({ data: [] }, { status: 200 });
    }

    const requestData = {
      apiKey: process.env.NOVA_POSHTA_API_KEY,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        CityRef: warehouseId,
        Page: 1,
      },
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });
    const warehouse = await response.json();

    if (!warehouse.success) {
      return NextResponse.json({ error: warehouse.errors }, { status: 400 });
    }

    const filteredWH = (warehouse.data || []).map(wh => ({
      label: ln === 'ru' ? wh.DescriptionRu : wh.Description,
      value: wh.TypeOfWarehouse,
    }));

    return NextResponse.json(
      { data: filteredWH },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
