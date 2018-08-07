const moment = require('moment');

const date = moment(123456);
date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));