/*
    实体类:Student
*/

var mongoose = require("mongoose");
var db = require("./db.js");

//创建一个schema的结构
var studentSchema = mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    sex:{type:String}
});

/*
    mongoose.schema里可以绑定静态方法
*/
// 创建查找数据的静态方法
studentSchema.statics.findPerson = function (name, callback) {
    this.model("Student").find({name:name}, callback);
}
studentSchema.statics.updateInfo = function (conditions, update, options, callback) {
    this.model("Student").update(conditions, update, options, callback);
}

/*
    创建了一个模型
    基于schema创建的
*/
var studentModel = db.model("Student", studentSchema);

module.exports = studentModel;