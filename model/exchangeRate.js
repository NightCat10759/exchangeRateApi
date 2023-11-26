const fs = require("fs");
const path = require("path");
const exchangeData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../mock/exchangeRate.json"))
);

class ExchangeRate {
  static async getExchangeRate(source, target) {
    try {
      let echangeRate = exchangeData[source][target];
      return echangeRate;
    } catch (e) {
      console.error(e);
      throw Error(e);
    }
  }
}

module.exports = ExchangeRate;
