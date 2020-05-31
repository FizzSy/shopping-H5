const Router = require("koa-router");
const router = new Router({
    prefix: "/shopping",
});
const user = require("./user");
const goods = require("./goods");

router.use("/user", user.routes());
router.use("/goods", goods.routes());

module.exports = router;
