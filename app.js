const Koa = require("koa");
const Router = require("@koa/router");
const { error } = require("console");
// const fs = require("fs");
// const util = require("util");

const app = new Koa();
// const router = new Router();

// const data = util.promisify(fs.readFile)("./page.html");

// router.get("/", async (ctx) => {
//   ctx.body = "home page";
//   data.then((res) => {
//     ctx.type = "html";
//     ctx.body = res;
//   });
// });

// router.post("/", (ctx) => {
//   ctx.body = "home post";
// });
// router.get("/fofo", (ctx) => {
//   ctx.body = "fofo page";
// });
// router.get("/id/:id", (ctx) => {
//   console.log(ctx.params);
//   ctx.body = "fofo page";
// });
// app.use(router.routes()).use(router.allowedMethods());

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.state = 500;
    ctx.body = "服务端内部异常";
  }
});

app.use(async (ctx, next) => {
  new Error().message("");
  next();
  ctx.body = "fasfsf";
});

app.use(async (ctx, next) => {
  console.log("gsagsa");
  next();
});

app.listen(3000, () => {
  console.log("loc beg");
});
