const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const router = require("./router/index");

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

const port = 4416;
app.listen(port, () => {
  console.log(`启动成功,服务端口为:${port}`);
});
