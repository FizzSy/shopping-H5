const mongoose = require("mongoose");
// const db = "mongodb://localhost/shopping";
const db = "mongodb+srv://test-manage:qweasd123456@cluster0-x2az8.mongodb.net/shopping?retryWrites=true&w=majority";
const glob = require("glob");
const { resolve } = require("path");
let maxConnectTimes = 0;

exports.initSchema = () => {
    glob.sync(resolve(__dirname, "./schema", "**/*.js")).forEach(require);
};

exports.connect = () => {
    mongoose.connect(db);
    return new Promise((resolve, reject) => {
        mongoose.connection.on("disconnected", () => {
            console.log("数据库断开连接");
            if (maxConnectTimes < 3) {
                maxConnectTimes += 1;
                mongoose.connect(db);
            } else {
                reject();
                throw new Error("数据库连接异常");
            }
        });
        mongoose.connection.on("error", (err) => {
            console.log("数据库出错");
            if (maxConnectTimes < 3) {
                maxConnectTimes += 1;
                mongoose.connect(db);
            } else {
                reject(err);
            }
        });
        mongoose.connection.once("open", () => {
            console.log("数据库连接成功");
            resolve();
        });
    });
};
