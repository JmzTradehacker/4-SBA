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