//Finnhub Api
import { getStockData, saveToLocalFavorites, getLocalFavorites } from './api.js';
import { updateStockData, displayFavorites, showError } from './dom.js';

//CoinGecko Api
import { getCryptoData } from './api.js';
import { displayCryptoData } from './dom.js';

//NewsApi
import { getFinanceNews } from './api.js';
import { displayFinanceNews } from './dom.js';


// Fetch and display stock data for each symbol
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-btn');
    const symbolInput = document.getElementById('stock-symbol');

    // Display saved favorites on load
    const savedFavorites = getLocalFavorites();
    displayFavorites(savedFavorites);

    searchButton.addEventListener('click', async () => {
        const symbol = symbolInput.value.trim().toUpperCase();

        if (!symbol) {
            showError('Please enter a valid stock symbol.');
            return;
        }

        try {
            const stockData = await getStockData(symbol);
            updateStockData(symbol, stockData);

            // Listen for "Save to Favorites" button click
            const saveButton = document.getElementById('save-favorite-btn');
            if (saveButton) {
                saveButton.addEventListener('click', () => {
                    const wasSaved = saveToLocalFavorites(symbol);
                    if (wasSaved) {
                        alert(`Stock ${symbol} saved to favorites!`);
                        displayFavorites(getLocalFavorites());
                    } else {
                        alert('This stock is already in your favorites.');
                    }
                });
            }
        } catch (error) {
            showError('Failed to fetch data for the given stock symbol.');
        }
    });
});

// List of elements to display
const cryptoIds = ['bitcoin', 'ethereum', 'dogecoin'];

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
loadCryptos();
loadNews();