const ExchangeRateModel = require("../model/exchangeRate");
const _ = require("lodash");

class ExchangeRate {
  static async getExchangeRate(source, target, amount) {
    try {
      // 檢查金額格式
      let exhcangeRate = await ExchangeRateModel.getExchangeRate(
        source,
        target
      );
      // 拿掉$字號 和千分位
      amount = this.amountRemoveSymbol(amount);
      amount = this.amountRemoveComma(amount);
      // 乘上匯率
      amount = this.amountWithExchangeRate(amount, exhcangeRate);
      // 加上小數後兩位，和千分位
      amount = amount.toFixed(2);
      amount = this.amountWithComma(amount);
      return amount;
    } catch (e) {
      console.error(e);
      throw Error(e);
    }
  }
  static amountWithComma(amount) {
    return amount.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  static amountRemoveSymbol(amount) {
    return amount.slice(1, amount.length);
  }
  static amountRemoveComma(amount) {
    return amount.split(",").join("");
  }
  static amountWithExchangeRate(amount, exhcangeRate) {
    return !_.isNil(exhcangeRate) && !_.isEqual(exhcangeRate, 0)
      ? amount * exhcangeRate
      : amount;
  }
}

module.exports = ExchangeRate;
