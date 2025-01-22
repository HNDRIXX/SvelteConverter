import axios from 'axios'

const BASE_URL = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_xacIjG8XhSuff9pfOMURmYWm9clarwlUmYsG1xIC'

interface CurrencyRates {
    meta: {
        last_updated_at: string
    },
    data: Record<string, {
        code: string,
        value: number
    }>
}

export async function getCurrency(baseCurrency: string = 'USD', currency: string = 'PHP'): Promise<CurrencyRates> {
    try {
        const response = await axios.get<CurrencyRates>(`${BASE_URL}&currencies=${currency}&base_currency=${baseCurrency}`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching currency rates:', error);
        throw new Error(error.response?.data?.message || 'Failed to fetch currency rates')
    }
}
