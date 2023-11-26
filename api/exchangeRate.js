const ExchangeRateService = require("../service/exchangeRate");
const _ = require("lodash");

class ExchangeRate {
  static async getExchangeRate(ctx) {
    try {
      let source = ctx.params.source;
      let target = ctx.params.target;
      let amount = ctx.params.amount;

      if (!_.isNil(source) && !_.isNil(target) && !_.isNil(amount)) {
        let result = await ExchangeRateService.getExchangeRate(
          source,
          target,
          amount
        );
        let msg = {
          msg: "success",
          amount: result,
        };
        ctx.body = msg;
        ctx.status = 200;
      } else {
        let msg = {
          msg: "fail params error",
          amount: "NaN",
        };
        ctx.body = msg;
        ctx.status = 200;
      }
    } catch (e) {
      console.error(e);
      throw Error(e);
    }
  }
}

module.exports = ExchangeRate;
