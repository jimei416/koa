const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("./router/index");

const app = new Koa();

// 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        code: 401,
        msg: err.message,
      };
    } else {
      throw err;
    }
  });
});

app.use(bodyParser());
app.use(router.routes());

const port = 4416;
app.listen(port, () => {
  console.log(`启动成功,服务端口为:${port}`);
});
