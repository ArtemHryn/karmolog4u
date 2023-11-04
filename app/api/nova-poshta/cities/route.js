const apiUrl = "https://api.novaposhta.ua/v2.0/json/";

export const GET = async (request) => {
  try {
    const url = new URL(request.url);

    const cityName = url.searchParams.get("city");
    const cityReq = {
      apiKey: process.env.NOVA_POSHTA_API_KEY,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: { FindByString: cityName, Page: 1 },
    };

    const citiesRes = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(cityReq),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const cities = await citiesRes.json();
    const filteredCities = cities.data.map((el) => ({
      value: el.Ref,
      label: el.Description,
    }));
    return new Response(JSON.stringify({ data: filteredCities }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
};
