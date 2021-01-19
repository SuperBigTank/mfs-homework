//1.请实现 Generator 函数 range(start,end)，可以迭代出start到end直接所有整数

function* range(start, end) {
 let _start = Math.ceil(start);
 let _end = Math.floor(end);
 for (let N = _start; N <= _end; N++) {
  yield N;
 }
}
let arr = […range(2.3, 14.6)];
console.log(arr)


//2.请实现 Generator 函数 fib()，实现计算无限序列：斐波那契数列
function* fib() {

 let [prev,curr] = [0,1];
 yield 0;
 while (true) {
  [prev, curr] = [curr, prev + curr];
  yield pre;
 }
}

//3.请使用解构语法，使用上面实现的 fib() 函数计算斐波那契数列前 3 项#
let [x1, x2, x3] = fib();
console.log(x1, x2, x3)