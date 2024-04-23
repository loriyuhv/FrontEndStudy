// 导入自定义的格式化时间的模块
const TIME = require('./02dateFormat');

// 调用方法，进行时间的格式化
const date = new Date();
// console.log(date);
const newDate = TIME.dateFormat(date);
console.log(newDate);