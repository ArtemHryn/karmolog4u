const apiUrl = "https://api.novaposhta.ua/v2.0/json/";

export const GET = async (request) => {
  try {
    const url = new URL(request.url);
    const warehouseId = url.searchParams.get("warehouse");
    const requestData = {
      apiKey: process.env.NOVA_POSHTA_API_KEY,
      modelName: "Address",
      calledMethod: "getWarehouses",

      methodProperties: {
        CityRef: warehouseId,
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
    const warehouse = await response.json();
    const filteredWH = warehouse.data.map((wh) => ({
      label: wh.Description,
      value: wh.Description,
    }));
    return new Response(JSON.stringify({ data: filteredWH }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
};
