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