// 1. 定义格式化时间的方法
function dateFormat(dateStr) {
  const date = new Date(dateStr);

  // 年/月/日
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  // 时/分/秒
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  const seconds = padZero(date.getSeconds());

  // return `YYYY-MM-DD HH:mm:ss`;
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

// 定义补零的函数
function padZero(n) {
  return n > 9 ? n : '0' + n;
}

module.exports = {
  dateFormat
}

