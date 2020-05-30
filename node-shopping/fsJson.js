const fs = require("fs");
const path = require("path");

fs.readFile("./data_json/goods.json", "utf8", function (err, data) {
    let newData = JSON.parse(data);
    let pushData = [];
    newData.RECORDS.map((value, index) => {
        if (value.IMAGE1 != null) {
            pushData.push(value);
        }
    });
    fs.writeFile(path.resolve(__dirname, "./data_json/newGoods.json"), JSON.stringify(pushData), function (err, data) {
        if (err) console.log("写文件操作失败");
        else {
            console.log("写文件操作成功");
        }
    });
});
