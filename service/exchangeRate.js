const ExchangeRateModel = require("../model/exchangeRate");

class ExchangeRate {
  static async getExchangeRate(source, target, amount) {
    try {
      let exhcangeRate = await ExchangeRateModel.getExchangeRate(
        source,
        target
      );
      amount =
        !_.isNil(exhcangeRate) && !_.isEqual(exhcangeRate, 0)
          ? amount * exhcangeRate
          : exhcangeRate;
      return amount;
    } catch (e) {
      console.error(e);
      throw Error(e);
    }
  }
}

module.exports = ExchangeRate;
