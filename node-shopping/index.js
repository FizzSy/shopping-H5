const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const bodyParser = require("koa-bodyparser");
const cors = require("koa2-cors");
const mongoose = require("mongoose");
const { connect, initSchema } = require("./database/init.js");

app.use(cors());
app.use(bodyParser());
initSchema();
const apiRouter = require("./router");
app.use(apiRouter.routes()).use(router.allowedMethods());
(async () => {
    await connect();
})();

app.listen(1003, () => {
    console.log("项目启动");
});
