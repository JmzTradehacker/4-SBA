//Display Finnhub Api
export function updateStockData(symbol, stockData) {
    const stockContainer = document.getElementById('stock-data');
    
    if (!stockContainer) {
        console.error('Stock data container not found.');
        return;
    }

    stockContainer.innerHTML = `
        <h2>Stock: ${symbol.toUpperCase()}</h2>
        <p>Current Price: $${stockData.currentPrice}</p>
        <p>High Price: $${stockData.highPrice}</p>
        <p>Low Price: $${stockData.lowPrice}</p>
        <p>Open Price: $${stockData.openPrice}</p>
        <p>Previous Close: $${stockData.prevClose}</p>
        <button id="save-favorite-btn">Save to Favorites</button>
    `;
};

export function showError(message) {
    const errorContainer = document.getElementById('error');
    
    if (errorContainer) {
        errorContainer.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
    }
};

//Display CoinGecko Api
export function displayCryptoData(crypto) {
    const cryptoDataContainer = document.getElementById('crypto-data');

    const cryptoItem = document.createElement('div');
    cryptoItem.classList.add('crypto-item');

    cryptoItem.innerHTML = `
        <h3>${crypto.id.toUpperCase()}</h3>
        <p>Price: $${crypto.price}</p>
    `;

    cryptoDataContainer.appendChild(cryptoItem);
};

//Display News Api
export function displayFinanceNews(articles) {
    const newsDataContainer = document.getElementById('news-data');

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        newsItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsDataContainer.appendChild(newsItem);
    });
};

import { getStockData} from './api.js';

export async function displayFavorites(favorites) {
    const favoritesContainer = document.getElementById('favorites-container');
    
    if (!favoritesContainer) {
        console.error('Favorites container not found.');
        return;
    }
    
    // Clear the container first
    favoritesContainer.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p>No favorites saved.</p>';
        return;
    }

    const ul = document.createElement('ul');
    
    for (let stock of favorites) {
        const li = document.createElement('li');

        // Fetch the current price for each favorite stock
        try {
            const stockData = await getStockData(stock);
            li.textContent = `${stock.toUpperCase()} - $${stockData.currentPrice}`;  // Display symbol and price
        } catch (error) {
            li.textContent = `${stock.toUpperCase()} - Price unavailable`;   // If the API call fails
        }

        // Create a Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.marginLeft = '10px';
        
        // Add an event listener to remove the stock from favorites
        removeButton.addEventListener('click', () => {
            removeFavorite(stock);
        });

        li.appendChild(removeButton);
        ul.appendChild(li);
    }

    favoritesContainer.appendChild(ul);
};


// Remove a stock from the favorites list
function removeFavorite(stock) {
    // Get current favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Filter out the stock to be removed
    favorites = favorites.filter(fav => fav !== stock);

    // Save updated favorites back to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Re-render the favorites list
    displayFavorites(favorites);
}