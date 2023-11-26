const ExchangeRateService = require("../service/exchangeRate");
const _ = require("lodash");

class ExchangeRate {
  static async getHi(ctx) {
    let name = ctx.query.name;
    console.log(name);
    ctx.body = "hi " + name;
    ctx.status = 200;
  }
  static async getExchangeRate(ctx) {
    try {
      let source = ctx.query.source;
      let target = ctx.query.target;
      let amount = ctx.query.amount;
      if (
        !_.isNil(source) &&
        !_.isNil(target) &&
        !_.isNil(amount) &&
        _.isEqual("$", amount[0])
      ) {
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
