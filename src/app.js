import { getStockData } from './api.js';
import { displayStockData } from './dom.js';

// List of stock symbols to display
const stockSymbols = ['AAPL', 'MSFT', 'TSLA'];

// Fetch and display stock data for each symbol
async function loadStocks() {
    for (const symbol of stockSymbols) {
        const stock = await getStockData(symbol);
        if (stock) {
            displayStockData(stock);
        }
    }
}

// Load stock data when the page loads
loadStocks();