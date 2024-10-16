const API_KEY = 'KWICPQ5YP8TLJNP7';

export async function getStockData(symbol) {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Extract the most recent stock data
        const latestTime = Object.keys(data['Time Series (5min)'])[0];
        const stockInfo = data['Time Series (5min)'][latestTime];
        return {
            symbol: symbol.toUpperCase(),
            price: stockInfo['1. open'],
            high: stockInfo['2. high'],
            low: stockInfo['3. low'],
            volume: stockInfo['5. volume'],
        };
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}