import axios from 'axios';

const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_xacIjG8XhSuff9pfOMURmYWm9clarwlUmYsG1xIC";
async function getCurrency(baseCurrency = "USD", currency = "PHP") {
  try {
    const response = await axios.get(`${BASE_URL}&currencies=${currency}&base_currency=${baseCurrency}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching currency rates:", error);
    throw new Error(error.response?.data?.message || "Failed to fetch currency rates");
  }
}

async function load() {
  try {
    const currencyData = await getCurrency("USD", "PHP");
    return {
      currencyData,
      error: null
    };
  } catch (error) {
    const apiError = { message: error.message };
    return {
      currencyData: null,
      error: apiError
    };
  }
}

var _page_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Czc3LQ3C.js')).default;
const universal_id = "src/routes/+page.ts";
const imports = ["_app/immutable/nodes/2.sI-KRgRk.js","_app/immutable/chunks/P-jciKzZ.js","_app/immutable/chunks/CTK-nKQQ.js","_app/immutable/chunks/Db9_DHQl.js","_app/immutable/chunks/B9QH5ZQb.js"];
const stylesheets = [];
const fonts = [];

var _2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  component: component,
  fonts: fonts,
  imports: imports,
  index: index,
  stylesheets: stylesheets,
  universal: _page_ts,
  universal_id: universal_id
});

export { _2 as _, getCurrency as g };
//# sourceMappingURL=2-BodaX5uC.js.map
