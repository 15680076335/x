function sum(a,b,c) {
    console.log(arguments);
    return a + b + c;
}
sum(1,2,3);


// this 绑定
console.log(this);

const person = {
    name:"yanqian",
    birthday:1998,
    calAge:function() {
        console.log(`年龄为：${2020-this.birthday}`);
    }
}
//调用对象(一)
person.calAge();
//调用对象(二)
const calAge = person.calAge;
calAge();

 

function multiply() {
    var g = 20;
    return e * f * g;
}
var c;

let a = 20;
const b = 30;
c = multiply();cg



// 变量提升(只适用于 var)
console.log(a);   // 变量定义前是 undefined
var a = "yangqian";
console.log(a);

// let/const不出现提升(会出现引用错误)——出现暂时性死区（tdz) 
function ass() {
    console.log(a)
    let a = "yangqian";
    console.log(a); 
}
ass();




// 四、作用域与作用域链
const name = "yangqian";
const age = 22;
const city = "china";



// 全局执行上下文中用 var声明的变量和函数会被认为是全局对象的属性和方法

var c = 3;
function foo() {
​	console.log("hi");

}
const foo = function(){}
global.c
global.foo()
// 当团队都在全局环境下用同一个变量命名时，将无法分清到底是哪一个，
// 容易出现命名冲突，直到程序完成之前会一直存在。


// 五、this值得确定
var name1 = 12;
const foo1 = function() {
    // let name = 12;
    console.log(this.name1 + 10);
    //    结果： undefined  + 10 ——>  NaN(不是一个数字)
    // 正确结果：10
}
foo1();


// 箭头函数中不存在 this
const foo = () => {console.log(2020-this.birthday)};
const oStudent = {
    name:"yanqian",
    birthday:1998,
    calAge:foo
}
oStudent.calAge();

const foo = function(){
    console.log(2020-this.birthday)
}
const oStudent = {
    name:"yanqian",
    birthday:1998,
    calAge:foo
}
oStudent.calAge();