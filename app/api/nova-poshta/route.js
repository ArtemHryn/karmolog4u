const apiUrl = "https://api.novaposhta.ua/v2.0/json/";

export const GET = async () => {
  try {
    const cityReq = {
      apiKey: process.env.NOVA_POSHTA_API_KEY,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: { FindByString: "Київ" },
    };

    const citiesRes = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(cityReq),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const requestData = {
      apiKey: process.env.NOVA_POSHTA_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",

      methodProperties: {
        CityRef: "8d5a980d-391c-11dd-90d9-001a92567626",
        Page: "1",
      },
    };

    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const cities = await citiesRes.json();
    return new Response(JSON.stringify({ data: data.data }), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
