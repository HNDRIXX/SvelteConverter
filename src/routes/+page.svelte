<script lang="ts">
    import { getCurrency } from "$lib";
    import { currencyCodes } from "$lib/currencyCodes";
    import image from "$lib/assets/pic.png";

    let data: | { data: Record<string, { code: string; value: number }> } | undefined = $state();
    let baseCurrency: any = $state(currencyCodes[0]);
    let convertCurrency: any = $state(currencyCodes[2]);

    async function load() {
        try {
            const currencyData: any = await getCurrency(baseCurrency, convertCurrency);
            data = currencyData;
            return { currencyData, error: null };
        } catch (error) {
            return {
                currencyData: null,
                error: { message: (error as Error).message },
            };
        }
    }
</script>

<div class="flex items-center justify-center h-screen font-['Poppins']">
    <div class="items-start border-[#161616] border-2 rounded-md p-12 shadow-xl shadow-[#3cc8e9]">
        <h1 class="text-4xl font-bold text-slate-800">Currency Converter</h1>

        {#await load()}
            <p class="text-lg text-slate-800 text-center p-10">Please wait</p>
        {:then result}
            {#if result.error}
                <p>{result.error.message}</p>
            {:else if data}
                <div>
                    <div class="mt-4 flex flex-row items-center gap-4">
                        <label
                            for="currencyDropdown"
                            class="block text-md font-semibold"
                            >Base Currency:</label
                        >
                        <select
                            id="currencyDropdown"
                            bind:value={baseCurrency}
                            class="block w-40 overflow-y-auto border border-gray-300 rounded px-2 py-1 outline-none"
                        >
                            {#each currencyCodes as currency}
                                <option value={currency}>{currency}</option>
                            {/each}
                        </select>

                        <label
                            for="currencyDropdown"
                            class="block text-md font-semibold"
                            >Convert Currency:</label
                        >
                        <select
                            id="currencyDropdown"
                            bind:value={convertCurrency}
                            class="block w-40 overflow-y-auto border border-gray-300 rounded px-2 py-1 outline-none"
                        >
                            {#each currencyCodes as currency}
                                <option value={currency}>{currency}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="mt-4 bg-gray-700 rounded-md p-4">
                        {#each Object.entries(data.data) as [key, item]}
                            <p class="text-lg text-white">
                                <span class="font-bold">{item.code}</span>: {item.value.toFixed(2)}
                            </p>
                        {/each}
                    </div>
                </div>
            {/if}
        {:catch error}
            <p class="text-lg text-slate-800 text-center p-10">{error.message}</p>
        {/await}
    </div>

    <img src={image} alt="currency" class="ml-48 w-[35rem] h-auto" />
</div>
