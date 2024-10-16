//AlphaVantage Api
import { getStockData } from './api.js';
import { displayStockData } from './dom.js';

//CoinGecko Api
import { getCryptoData } from './api.js';
import { displayCryptoData } from './dom.js';

//NewsApi
import { getFinanceNews } from './api.js';
import { displayFinanceNews } from './dom.js';


// List of elements to display
const stockSymbols = ['AAPL', 'MSFT', 'TSLA'];
const cryptoIds = ['bitcoin', 'ethereum', 'dogecoin'];

// Fetch and display stock data for each symbol
async function loadStocks() {
    for (const symbol of stockSymbols) {
        const stock = await getStockData(symbol);
        if (stock) {
            displayStockData(stock);
        }
    }
};

// Fetch and display cryptocurrency prices for each ID
async function loadCryptos() {
    for (const id of cryptoIds) {
        const crypto = await getCryptoData(id);
        if (crypto) {
            displayCryptoData(crypto);
        }
    }
};

// Fetch and display the latest finance news
async function loadNews() {
    const articles = await getFinanceNews();
    if (articles) {
        displayFinanceNews(articles);
    }
};

// Load data when the page loads
loadStocks();
loadCryptos();
loadNews();