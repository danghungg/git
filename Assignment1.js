// Exercise 2:
// Q1
var account1;
account1 = 5240.5;
account1 = 5240;
console.log(account1);
var account2;
account2 = 10970.055;
account2 = 10970;
console.log(account2);
// Q2:
//lấy tạm giá trị
function ex22(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var number = ex22(1, 99999);
console.log(number);
// Q3
// cách 1
// chuyển đổi sang string
function ex3(number) {
    var number2 = number.substring(3, 5);
    return number2;
}
console.log(ex3(number + ""));
// cách 2
function ex3b(number) {
    return number % 100;
}
console.log(ex3b(number));
// Exercise 3
//Q1:
var array = ["a", "b", "c", "d", "e"];
for (var index = 0; index < array.length; index++) {
    console.log(index);
}
//Exercise 4
//Q1:
//a
var fullname = "nguyễn văn a";
function hello() {
    console.log(fullname);
}
hello();
//b
function hello1(fullname1) {
    console.log(fullname1);
}
hello1("nguyễn văn b");
// c
function hello2() {
    function hello3(fullname2) {
        return fullname2;
    }
    console.log(hello3("nguyễn văn c"));
}
hello2();
// Q2:
var myName = function printName(fullname) {
    return "my Name is:" + fullname;
};
console.log(myName("Đặng Quốc Hưng"));
//Q3:
function getGreeting(firstName, lastName) {
    function greeting() {
        return firstName + " " + lastName;
    }
    return greeting();
}
console.log(getGreeting("Đặng", "Hưng"));
//Q4:
var Dem = function (i) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
};
for (var i = 1; i < 6; i++) {
    Dem(i);
}
;
// Q5:
function factory(x) {
    return function (y) {
        return Math.pow(y, x);
    };
}
var binhphuong = factory(2);
var canbac2 = factory(0.5);
console.log("bình phương:" + binhphuong(3));
console.log("căn bậc 2:" + canbac2(100));
//  Q6:
var count = 1;
function Person() {
    var id = count++;
    var name;
    return {
        setName: function (value) {
            name = value;
        },
        getName: function () {
            return name;
        },
        getID: function () {
            return id;
        }
    };
}
var person = Person();
person.setName("nguyễn văn A");
var person1 = Person();
person1.setName("nguyễn văn B");
console.log(person.getID(), person.getName());
console.log(person1.getID(), person1.getName());
