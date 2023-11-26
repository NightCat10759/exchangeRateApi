const Koa = require("koa");
const ExchangeRate = require("./router/exchangeRate");
const log4js = require("koa-log4");

const app = new Koa();

log4js.configure({
  appenders: {
    output: {
      type: "stdout",
    },
  },
  categories: {
    default: { appenders: ["output"], level: "all" },
    http: { appenders: ["output"], level: "all" },
  },
});

app.use(log4js.koaLogger(log4js.getLogger("http"), { level: "auto" }));
app.use(ExchangeRate.routes()).use(ExchangeRate.allowedMethods());

console.log(ExchangeRate.stack.map((i) => i.path));

app.listen(3000);
