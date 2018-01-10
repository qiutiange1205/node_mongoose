var mongoose = require("mongoose");

var db = mongoose.createConnection("mongodb://localhost/school");

db.once("open", function () {
    console.log("数据库成功连接了");
})

module.exports = db; 