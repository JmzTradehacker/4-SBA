//Display AlphaVantage Api
export function displayStockData(stock) {
    const stockDataContainer = document.getElementById('stock-data');

    const stockItem = document.createElement('div');
    stockItem.classList.add('stock-item');

    stockItem.innerHTML = `
        <h3>${stock.symbol}</h3>
        <p>Price: $${stock.price}</p>
        <p>High: $${stock.high}</p>
        <p>Low: $${stock.low}</p>
        <p>Volume: ${stock.volume}</p>
    `;

    stockDataContainer.appendChild(stockItem);
}

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
}