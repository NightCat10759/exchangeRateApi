const Router = require("koa-router");
const router = new Router();
const ExchangeRate = require("../api/exchangeRate");

router.get("/getExchangeRate", ExchangeRate.getExchangeRate);
router.get("/getHi", ExchangeRate.getHi);

module.exports = router;
