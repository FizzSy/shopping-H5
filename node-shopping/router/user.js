const Router = require("koa-router");
const router = new Router();
const mongoose = require("mongoose");
let User = mongoose.model("User");

router.post("/register", async (ctx) => {
    let newUser = new User({
        userName: ctx.request.body.userName,
        password: ctx.request.body.password,
    });
    await User.findOne({ userName: ctx.request.body.userName }).then(async (res) => {
        if (!res) {
            await newUser.save().then(() => {
                ctx.body = {
                    status: 200,
                    code: 200,
                    msg: "注册成功",
                };
            });
        } else {
            ctx.body = {
                code: 1,
                msg: "此用户名已注册",
            };
        }
    });
});

router.post("/login", async (ctx) => {
    const { password, userName } = ctx.request.body;
    let newUser = new User();
    await User.findOne({ userName }).then(async (res) => {
        if (res) {
            await newUser.comparePassword(password, res.password).then((isMatched) => {
                console.log(isMatched);
                if (isMatched) {
                    ctx.body = {
                        code: 200,
                        msg: "登录成功",
                    };
                } else {
                    ctx.body = {
                        code: 1,
                        msg: "密码错误",
                    };
                }
            });
        } else {
            ctx.body = {
                code: 1,
                msg: "此用户还没注册",
            };
        }
    });
});

module.exports = router;
