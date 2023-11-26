const Koa = require("koa");
const ExchangeRate = require("./router/exchangeRate");
const log4js = require("koa-log4");

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

const app = new Koa();

// response
app.use((ctx) => {
  ctx.body = "Hello Koa";
});

app.use(log4js.koaLogger(log4js.getLogger("http"), { level: "auto" }));

ExchangeRate.use("./exchangeRate");

app.listen(3000);
