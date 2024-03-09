const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("./router/index");
const config = require("./config/index");
const koajwt = require("koa-jwt");
const cors = require("koa2-cors");

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

// 跨域
app.use(
  cors({
    origin: "*",
    maxAge: 5,
    credentials: true,
  })
);

// jwt
app.use(
  koajwt({
    secret: config.jwt.SECRET,
  }).unless({
    path: [/register/, /login/],
  })
);

app.use(bodyParser());
app.use(router.routes());

const port = 4416;
app.listen(port, () => {
  console.log(`启动成功,服务端口为:${port}`);
});
