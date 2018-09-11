const List = require('./ch4/js/BONUS_Linked_List').LinkedList
const { count } = require('./ch4/js/4_2.js')

const list = new List()

list.addToHead('woon')
list.addToTail('fthreav')
list.addToHead('tuow')
list.addToHead('ferre')

console.log(count(list))