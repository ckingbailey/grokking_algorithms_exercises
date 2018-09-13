const List = require('./ch4/js/BONUS_Linked_List').LinkedList
const { count } = require('./ch4/js/4_2.js')

const list = new List()

list.unshift('woon')
list.unshift('fthreav')
list.push('tuow')
list.unshift('ferre')
list.shift();

console.log(count(list))