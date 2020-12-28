# 四川文产院 2018 级《WEB 前端实训》试卷答卷

> 答卷说明：
> 1. 本试卷满分 100 分，120 分钟完卷。
> 2. 本次考试为开卷考试。
> 3. 本试卷适用于 2018 级移动专业 1、2 班

## 一、选择题（30 分，共 15 题，每题 2 分，答案包含单选、多选）

1. JavaScript 中声明变量的关键字包括：___A B C____________。
2. 如下属于 JavaScript 原始数据类型的有：___A B________。
3. 在什么时候会出现 undefined?___A B C D____
4. 以下数组方法中，哪一个是用于删除数组中的第一个元素?______C_
5. 定义函数的方式包括：______A B C D____
6. 间接调用函数的方法包括：____________A B
7. 下述有关闭包的叙述，正确的有：___A C D__________。
8. 下面有关纯函数的叙述，正确的有：_________A B C________。
9. 面向对象编程的基本特征包括：____________B C D_______。
10. 在 JavaScript 中创建对象的方式包括：___A B C D_______________。
11. 在 JavaScript 中，执行上下文的创建分为两个阶段，这两个阶段是：___C____D___。
12. 变量声明的三种方式中，变量可以提升的方式包括：___A__B___。
13. 在 JavaScript 中，有关 this 值的说法，正确的包括：_________A C D____。
14. 下面有关 ES6 类的说法，正确的包括：___B D_________。
15. 下面有关 ES6 类的静态方法，正确的包括：_____A_B C______。

------

## 二、代码填空题（20 分，共 5 题，每题 4 分）

1. 控制台的输出为：`___student undefined_________________`。
2. 控制台的输出为：`_____1_________________`。
3. 控制台的输出为：`_______I am outside!______________`。
4. 控制台的输出为：`_____I am outside!_______________`。
5. 控制台的输出为：
    `____小明________`
    `_______hi_____`
-------

## 三、代码题（50 分，共 5 题，每题 10 分）

1. 斐波那契（Fibonacci）数组的计算是一项很耗时的操作，请使用 Memoization 技术对斐波那契数组的计算进行优化。

```js
var fibonacci = function(n){
    return n < 2 ? n:arguments.callee(n-1) + arguments.callee(n-2);
};

function memoize(fn){
    return function(){
        var args = Array.prototype.slice.call(arguments);
        fn.cache = fn.cache || {};
        return fn.cache[args]
            ?fn.cache[args]
            :(fn.cache[args] = fn.apply(this,args));
    };
}
const memFib = memoize(fibonacci);
console.time();
console.log(memFib(30));
console.timeEnd();
console.time();
console.log(memFib(30));
console.timeEnd();
```

-------

2. 代码为：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=1200, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul id="book">
        <li>Java<>
        <li>Python<>
        <li>JavaScript<>
    </ul>
    <input type="text" id="bookname" />
    <button id='btnAdd'>+<tton>
    <button id="btnDel">-<tton>
    <script>
        const books = document.querySelector("#book")
        const bookName = document.querySelector("#bookname")
        const btnAdd = document.querySelector("#btnAdd")
        const btnDel = document.querySelector("#btnDel")

        const addBooks = () => {
            const oElement = document.createElement('li')
            const oText = document.createTextNode(bookName.value)
            oElement.appendChild(oText)
            books.appendChild(oElement)
            bookName.value = ""
        }

        const delBooks = () => {
            books.removeChild(books.lastElementChild)
        }
        
        btnAdd.addEventListener("click", addBooks)
        btnDel.addEventListener('click', delBooks)
    </script>
</body>

<html>
```

-------

3. 代码为：

```js
const oArray = [1, 2, 2, 3, null, null, undefined, undefined, 4, 4];
const set=new Set([1, 2, 2, 3, null, null, undefined, undefined, 4, 4]);
console.log([...set]);
```

-------

4. 代码：

```js
const oArray = [1, 2, 12, 10, 33, 7, 9, 22];
const myArray = [1,3,12,5,23,18,7];

function num(a, b) {
  return a - b;
}

myArray.sort(num);   
console.log(myArray);
```

-------

5. 代码：

```js
const oArray = [0, 12, 7, 8, 9, 24, 1];
const oArray1 = oArray.filter((x) => x%2===0);
console.1og(oArray1) 
const mean = oArray1. reduce(
    (acc,x) => acc + x)
console.1og(mean)
```





完成答卷后，请将答卷上传到个人远程仓库。否则以零分处理。

​        