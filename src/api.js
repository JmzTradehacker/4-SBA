//AlphaVantage Api
const API_KEY = 'KWICPQ5YP8TLJNP';

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


//CoinGecko Api
export async function getCryptoData(cryptoId) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            id: cryptoId,
            price: data[cryptoId].usd,
        };
    } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
    }
}


//NewsAPI
export async function getFinanceNews() {
    const url = `https://newsapi.org/v2/everything?q=finance&apiKey=${NEWS_API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.articles.slice(0, 5); // Return the first 5 articles
    } catch (error) {
        console.error('Error fetching finance news:', error);
    }
}