console.log("hello,JavaScript!");    // 输出 


/* 声明变量 */
// 在 ES6 之后就不怎么用 Var 命名了
var strName = 'xiaoming';       // strName——匈牙利命名法
console.log(global.strName);

let strName = 'xiaoming';

const isHuman = True;    // 声明的同时也需要初始化


let a = 10;
console.log(typeof a);   // typeof 返回值是字符串（表示的是你定义的字符所属的字符串——这里是 number）
// 这里是多写一个 typeof ，返回值即为：string，无论定义的字符是什么类型，都只返回 string
console.log(typeof typeof a);

let d;      // 未定义类型   定义变量未赋值时就是一种未定义类型
console.log(typeof d);

let e = null;
console.log(e == undefined);   // 判断赋值后的变量 e 是否等于 undefined   结果是：True
// === ——> （严格）判断是否相等


/* 模板字符串 */
// 快速复制上下行代码：Shift+Alt+上或下键
const strName1 = "yangqian"   // 双引号

const strName2 = "yangqian"   // 单引号

const strName3 = 'He\'s a teacher'   // 双引号
console.log(strName3)


let a1 = "yangqian"
let a2 = 'yangqian'
let a3 = 'dhadhihd'
// 模板字符串
const strName4 = 
`
<h1>
<p>${a1}</p>
<p>${a2}</p>
<p>${a3}</p>
</h1>
`
console.log(strName4)


/* 对象运算符 */
const oStudent = {
    name:"yangqian",
    age:22
}
delete
console.log('name' in oStudent)  // 判断 name 对象是否在变量里面


const str = [1,2,3,4,5]   // 判断的的是第几位元素在不在，而不是判断具体的某一位元素
console.log(3 in str)

/* 查看某一变量是否是数组类型 */
const oArray = new Array()
console.log(oArray instanceof Array)

/* 第三个作业：打印五角星 */