const Router = require("koa-router");
const router = new Router();
const ExchangeRate = require("../api/exchangeRate");

router.get("/exchangeRate:source:target:amount", ExchangeRate.getExchangeRate);

module.exports = router;
