# 📈 Stock Price Tracker & Favorites App

Welcome to the **Stock Price Tracker & Favorites** web application! This app allows users to search for stock prices, save favorite stocks, and remove them. It also displays the real-time price of each favorite stock. Built using modern JavaScript techniques, the app demonstrates asynchronous API calls, data manipulation, and DOM interaction.

## 🚀 Features
- **Stock Search**: Look up real-time stock prices using the FinHub API.
- **Save Favorites**: Save your favorite stocks and keep track of their live prices.
- **Remove Favorites**: Remove any stock from your favorites list with a single click.
- **Persistent Storage**: Favorites are saved using `localStorage`, allowing you to access them even after refreshing the page.

## 🛠️ Technologies Used
- **JavaScript (ES6+)**: Modular code split into `api.js`, `dom.js`, and `app.js`.
- **FinHub API**: Fetch real-time stock data.
- **Async/Await**: Handle asynchronous API requests.
- **localStorage**: Persist user favorites across sessions.

## 📑 Installation & Setup
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/stock-price-tracker.git

2. Navigate to the project folder:
    ```bash
    cd stock-price-tracker

3. Open index.html in your browser to run the app locally.

## 📈 How to Use

1. **Search for Stocks**: Type a stock symbol in the search bar (e.g., AAPL for Apple) and hit Enter.

2. **Save a Stock**: Click "Save to Favorites" to keep track of the stock.

3. **View Real-Time Prices**: Your favorite stocks will be displayed with their current price.

4. **Remove Favorites**: To remove a stock from your favorites list, simply click the "Remove" button next to the stock.

## 💡 Future Enhancements
- **Sorting Favorites**: Add sorting options for favorite stocks (e.g., by price or symbol).
- **Pagination**: Implement pagination for stock search results.
- **Enhanced Search**: Improve stock search with suggestions and error handling - for invalid symbols.

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for more details.