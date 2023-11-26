const fs = require("fs");
const _ = require("lodash");
const path = require("path");
const exchangeData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../mock/exchangeRate.json"))
);

class ExchangeRate {
  static async getExchangeRate(source, target) {
    try {
      console.info(exchangeData);
      let echangeRate = !_.isNil(exchangeData.currencies[source][target])
        ? exchangeData.currencies[source][target]
        : null;
      return echangeRate;
    } catch (e) {
      console.error(e);
      throw Error(e);
    }
  }
}

module.exports = ExchangeRate;
