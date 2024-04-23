// const wsw = require('./wsw_tools/index.js');
const wsw = require('./wsw_tools');

const date = new Date();
const newDate = wsw.dateFormat(date);
console.log(newDate);