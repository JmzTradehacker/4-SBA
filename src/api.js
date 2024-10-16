//Finnhub Api
const FINNHUB_API_KEY = 'cs7ing1r01qtqcar4ql0cs7ing1r01qtqcar4qlg';
const BASE_URL = 'https://finnhub.io/api/v1/';

export async function getStockData(symbol) {
    try {
        const response = await fetch(`${BASE_URL}quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
        const data = await response.json();
        
        if (!response.ok || !data.c) {
            throw new Error('Failed to fetch stock data or symbol not found.');
        }

        return {
            currentPrice: data.c,
            highPrice: data.h,
            lowPrice: data.l,
            openPrice: data.o,
            prevClose: data.pc,
        };
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
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
};


//NewsAPI

const NEWS_API_KEY = '356356cd4edb474cb64374bd746454c3';

export async function getFinanceNews() {
    const url = `https://newsapi.org/v2/everything?q=finance&apiKey=${NEWS_API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.articles.slice(0, 5); // Return the first 5 articles
    } catch (error) {
        console.error('Error fetching finance news:', error);
    }
};

// Mock API URL
const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function saveStockToFavorites(stockSymbol) {
    try {
        // Simulate POST request to save favorite stock
        const response = await fetch(MOCK_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ stock: stockSymbol })
        });

        if (!response.ok) {
            throw new Error('Failed to save stock to favorites.');
        }

        const data = await response.json();
        return data; // This will return the saved data from the mock API.
    } catch (error) {
        console.error('Error saving stock to favorites:', error);
        throw error;
    }
};

// Save stock to localStorage favorites
export function saveToLocalFavorites(stockSymbol) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Check if the stock is already in the favorites list
    if (!favorites.includes(stockSymbol)) {
        favorites.push(stockSymbol);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        return true; // Saved successfully
    }
    return false; // Stock was already in favorites
};

// Get all favorite stocks from localStorage
export function getLocalFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
};