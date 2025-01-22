import { j as await_block, e as pop, k as ensure_array_like, p as push } from './index-yKMbhy_Q.js';
import { g as getCurrency } from './2-BodaX5uC.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import 'axios';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const currencyCodes = [
  "USD",
  "EUR",
  "PHP",
  "JPY",
  "GBP",
  "CHF",
  "AUD",
  "CAD",
  "CNY",
  "HKD",
  "NZD",
  "SGD",
  "SEK",
  "NOK",
  "DKK",
  "NIO",
  "MXN",
  "BRL",
  "ZAR"
];
const image = "/_app/immutable/assets/pic.De7i3gTv.png";
function _page($$payload, $$props) {
  push();
  let data = undefined;
  let baseCurrency = currencyCodes[0];
  let convertCurrency = currencyCodes[2];
  async function load() {
    try {
      const currencyData = await getCurrency(baseCurrency, convertCurrency);
      data = currencyData;
      return { currencyData, error: null };
    } catch (error) {
      return {
        currencyData: null,
        error: { message: error.message }
      };
    }
  }
  $$payload.out += `<div class="flex items-center justify-center h-screen font-['Poppins']"><div class="items-start border-[#161616] border-2 rounded-md p-12 shadow-xl shadow-[#3cc8e9]"><h1 class="text-4xl font-bold text-slate-800">Currency Converter</h1> <!---->`;
  await_block(
    load(),
    () => {
      $$payload.out += `<p class="text-lg text-slate-800 text-center p-10">Please wait</p>`;
    },
    (result) => {
      if (result.error) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<p>${escape_html(result.error.message)}</p>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (data) {
          $$payload.out += "<!--[-->";
          const each_array = ensure_array_like(currencyCodes);
          const each_array_1 = ensure_array_like(currencyCodes);
          const each_array_2 = ensure_array_like(Object.entries(data.data));
          $$payload.out += `<div><div class="mt-4 flex flex-row items-center gap-4"><label for="currencyDropdown" class="block text-md font-semibold">Base Currency:</label> <select id="currencyDropdown" class="block w-40 overflow-y-auto border border-gray-300 rounded px-2 py-1 outline-none"><!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let currency = each_array[$$index];
            $$payload.out += `<option${attr("value", currency)}>${escape_html(currency)}</option>`;
          }
          $$payload.out += `<!--]--></select> <label for="currencyDropdown" class="block text-md font-semibold">Convert Currency:</label> <select id="currencyDropdown" class="block w-40 overflow-y-auto border border-gray-300 rounded px-2 py-1 outline-none"><!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let currency = each_array_1[$$index_1];
            $$payload.out += `<option${attr("value", currency)}>${escape_html(currency)}</option>`;
          }
          $$payload.out += `<!--]--></select></div> <div class="mt-4 bg-gray-700 rounded-md p-4"><!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let [key, item] = each_array_2[$$index_2];
            $$payload.out += `<p class="text-lg text-white"><span class="font-bold">${escape_html(item.code)}</span>: ${escape_html(item.value.toFixed(2))}</p>`;
          }
          $$payload.out += `<!--]--></div></div>`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
  );
  $$payload.out += `<!----></div> <img${attr("src", image)} alt="currency" class="ml-48 w-[35rem] h-auto"></div>`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Czc3LQ3C.js.map
