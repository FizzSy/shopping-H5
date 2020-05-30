const Router = require("koa-router");
const router = new Router();
const mongoose = require("mongoose");
let Goods = mongoose.model("Goods");
let Category = mongoose.model("Category");
let CategorySub = mongoose.model("CategorySub");
const fs = require("fs");
const path = require("path");

router.get("/insetAllGoodsInfo", async (ctx) => {
    fs.readFile(path.resolve(__dirname, "../data_json/newGoods.json"), "utf8", function (err, data) {
        console.log(err);
        data = JSON.parse(data);
        data.map((value, index) => {
            let newGoods = new Goods(value);
            newGoods.save();
        });
    });
});

router.get("/insetAllcategory", async (ctx) => {
    fs.readFile(path.resolve(__dirname, "../data_json/category.json"), "utf8", function (err, data) {
        console.log(err);
        data = JSON.parse(data);
        data.RECORDS.map((value, index) => {
            let newCategory = new Category(value);
            newCategory.save();
        });
    });
});

router.get("/insetAllcategorySub", async (ctx) => {
    fs.readFile(path.resolve(__dirname, "../data_json/category_sub.json"), "utf8", function (err, data) {
        console.log(err);
        data = JSON.parse(data);
        data.RECORDS.map((value, index) => {
            let newCategorySub = new CategorySub(value);
            newCategorySub.save();
        });
    });
});

router.get("/getDetailGoodsInfo", async (ctx) => {
    let goodsId = ctx.request.query.goodsId;
    await Goods.findOne({ ID: goodsId })
        .then((res) => {
            console.log(res);
            ctx.body = {
                code: 200,
                message: res,
            };
        })
        .catch((err) => {
            ctx.body = {
                code: 500,
                message: err,
            };
        });
});

router.get("/getCategoryList", async (ctx) => {
    await Category.find().then((res) => {
        ctx.body = {
            code: 200,
            message: res,
        };
    });
});

router.get("/getCategorySubList", async (ctx) => {
    await CategorySub.find({ MALL_CATEGORY_ID: ctx.request.query.categoryId }).then((res) => {
        ctx.body = {
            code: 200,
            message: res,
        };
    });
});

router.get("/getGoodsListByCategorySubId", async (ctx) => {
    let page = ctx.request.query.page;
    let num = 10;
    let start = (page - 1) * num;
    await Goods.find({ SUB_ID: ctx.request.query.categorySubId })
        .skip(start)
        .limit(10)
        .then((res) => {
            ctx.body = {
                code: 200,
                message: res,
            };
        });
});

module.exports = router;
