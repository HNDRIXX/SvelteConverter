export const prerender = true;
export const ssr = true;

import { getCurrency } from '$lib';

interface APIError {
    message: string
}

interface CurrencyRates {
    meta: {
        last_updated_at: string
    },
    data: Record<string, {
        code: string,
        value: number
    }>
}

export async function load() {
    try {
        const currencyData: CurrencyRates = await getCurrency('USD', 'PHP');
        return {
            currencyData,
            error: null,
        };
    } catch (error) {
        const apiError: APIError = { message: (error as Error).message };
        return {
            currencyData: null,
            error: apiError,
        };
    }
}

