/* 字面量 */
// 定义字符串
a = ''; b = " "; c = ` `;
// 定义数组
let oArray = [1, 2, 3];

const oStudent = {};

// 正则表达式
const oReg =


    /* 
    定义函数的四种方式 
    */

    /* 一、函数声明 */
    function sayHello() {
        console.log("hello,JavaScript!");
    } //定义了一个函数字面量
sayHello();    // 调用
console.log(sayHello);     // 结果 ： [Function:sayHello]——错误调用

/* 二、函数定义 */
// 2.函数表达式
const sayHello = function () {
    console.log("hello,JavaScript!");
}  // （方式一）匿名函数表达式

const sayHello = function sayHi() {
    console.log("hello,JavaScript!");
}  // （方式二）命名函数表达式


/* Function 构造函数 */
const sayHello = new Function("console.log('hello,JavaScript!')");  // 引号内容容易出错，不建议使用

// ES6新增语法：箭头函数(建议使用)——没有 arguments
const sayHello = () => { console.log("hello,JavaScript!") };


/* 三、返回值 */
const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
}
console.log(sayHello());    // 结果：undefined

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
    return;
}
console.log(sayHello());    // 结果：undefined

const sayHello = function () {
    let a = 1, b = 2;
    let c = a + b;
    return c;
}
console.log(sayHello());    // 结果：3

/* 
四、函数参数 
*/
const add = function (a, b) {  // 形参：parameter
    return a + b;
}
// 传入实际参数调用
let a = add(2, 3);   // 实参：argument
console.log(a);

const add1 = function (a, b) {  // 形参：parameter
    return a + b;
}
// 不传实际参数调用
let b = add1();
console.log(b)     // 结果：NaN = not a number(undefined + undefined)

//  三个特殊值：正无穷大、负无穷大、NaN(不是一个数值)
let b = 1;
b = Infinity;   // 无穷大
b = - Infinity; // 负无穷大

/* 举例判断 */
let c = 1;
let c = c + null;   // 结果：1

let e1 = add1(1);    // 只传一个参数
console.log(e1);     // 结果：NaN
// 实参比形参多依旧可以调用
let e2 = add1(1, 2, 3, 4);    // 只传一个参数
console.log(e2);   // 结果：3

// 多传入的实参实际上是被储存在：arguments
const add2 = function (a, b) {
    let a1 = arguments.length;
    console.log(a1);
    console.log(arguments[5]);
    return a + b;
}
let b2 = add2(1, 2, 2, 2, 3, 4);
console.log(b2);

/* 通过循环来计算：无论传入多少个形参都可以进行加法运算 */

const add3 = function (a, b) {
    let sum;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}
let b3 = add3(1, 2, 3, 4, 5, 6, 7, 8);
console.log(b3);

/* numbers()：剩余参数。将所有实参收集到一个 nubmber 数组 */
const add4 = function (...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
}
let b4 = add4(1, 2, 2);
console.log(b4);

// 3.默认参数
const sayHi = function (studentName = 'js') {
    console.log(`hello,$(studentName)`);  // 使用了模板字符串：`hello,$(studentName)`
}
sayHi();
sayHi('java');




/* 五、箭头函数 */
const add1 = (...numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum = sum + num;
    }
    return sum;
}
console.log(add1(1, 2, 3));
// 1.当函数的参数不多时：
// (方式一)
const add2 = function (a, b) {
    return a + b;
}
// (方式二:只有一条语句并且只是一个返回值时)
const add3 = (a, b) => a + b;
// (方式三)
const add3 = () => { return 3 };
// (方式四)
const add4 = a => a + 1;
const add4 = function (a) {
    return a + 1;
}



/* 六、回调(callback)——传给一个参数的实参 */
// 1.使用函数声明的方式
function dance() {
    console.log("我在跳舞");
}
function sing(song, callback) {
    console.log(`我在唱${song}`);  // 
    if ((typeof callback) == 'function') {   // 如果回调是一个函数，就输出
        callback();
    }
}
sing("国歌", dance);

// 2.改写成函数表达式
const dance = function () {
    console.log("我在跳舞");
}
const sing = function (song, callback) {
    console.log(`我在唱${song}`);
    if ((typeof callback) == 'function') {
        callback();
    }
}
sing("国歌", dance);

// 3.改写成箭头函数
const dance = () => { console.log("我在跳舞") };
const sing = (song, callback) => {
    console.log(`我在唱${song}`);
    if ((typeof callback) == 'function') {
        callback();
    }
}
sing("国歌", dance);

// 4.直接用箭头函数作为回调函数
const sing = (song, callback) => {
    console.log(`我在唱${song}`);
    if ((typeof callback) == 'function') {
        callback();
    }
}
sing("国歌", () => { console.log("我在跳舞") });

// 5.回调函数的应用
// (1)数组排序——Array.sort()
const oArray = [1, 10, 2, 11, 9, 8]
console.log(oArray.sort());  // 输出是按照字符串(字母)顺序输出的

const num = (a, b) => b - a;
console.log(oArray.sort(num));

// 6.forEach()
// 方式一：
const colors = ['red', 'skyblue', 'green'];
for (let i = 1; i <= colors.length; i++)

    // 方式二：
    const colors = ['red', 'skyblue', 'green'];
colors.forEach(
    (colors, index) => console.log(`位置${index + 1}处的颜色为${colors}`)
);

// 方式三：
const oArray1 = [1, 2, 3, 4];
oArray1.forEach((colors) => console.log(`${colors}`));

// 7.map()
const oArray2 = [1, 2, 3, 4];
const oArray3 = oArray2.map((x) => x + x);
console.log(oArray3);

// 改写：
// (1)先定义一个数组，然后得到一个新数组
// 新数组中的每一个元素都是旧数组中每个元素的平方，不用 Map 版本
const a1 = [1, 2, 3];
let a2 = [];
for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i] * a1[i];
}
console.log(a2);

// (2)map版本
const a1 = [1, 2, 4];
const a2 = a1.map((x) => x * x);
console.log(a2);


// 8.reduce()
// 方式一：
const a1 = [1, 2, 3];
const a2 = a1.reduce(
    (sum, surVal) => sum + surVal
    // 参数           返回值
)
console.log(a2);
console.log(typeof a2);
// 方式二：
const a2 = [1, 2, 3].reduce((sum, surVal) => sum + surVal, 0);
console.log(a2);   // 6

const a2 = [1, 2, 3].reduce((sum, surVal) => sum + surVal, 3);
console.log(a2);   // 16

const sentence = 'The quick brown fox jumped over the lazy dog';
const words = sentence.split(" ");
console.log(words);

const lenOfWords = words.reduce(
    (sum, val) => sum + val.length, 0
)
console.log(lenOfWords);

// 9.filter
const a1 = [1, 2, 3, 4, 5, 6, 7, 8];
const a2 = a1.filter((a) => a % 2 === 0);
console.log(a2)


const sentence = 'The quick brown fox jumped over the lazy dog';
const words = sentence.split(" ");
console.log(words);
const sentence1 = words.filter((words) => words.length>4)
console.log(sentence1);

// 先映射一个数组元素求平方的新数组，再相加
const a = [1,2,3].map((x) => x * x).reduce((acc,x) => acc + x);
console.log(a);