fetch(
  "https://api.binance.com/api/v3/ticker/price?symbol=%5B%22BTCUSDT%22,%22BNBUSDT%22%5D"
).then(function (response) {
  console.log(response.json);
})
