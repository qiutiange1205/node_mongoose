var Student = require("./modules/Student.js");

// var tom = new Student({name:"静静",age:18,sex:"女"});
// tom.save();

Student.findPerson("静静", function (err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
});

Student.updateInfo({name:"静静"},{$set:{age:17}},{}, function () {
    console.log("修改成功");
})