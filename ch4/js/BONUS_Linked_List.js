/* linked list implentation
** LinkedList should know about only current item, head, and tail
** current item knows about its prev and next neighbors
** head and tail are items and therefore know about their prev and next neighbors
*/

function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}

LinkedList.prototype.unshift = function(value) {
    newNode = new Node(value, null, this.head || null)
    if (this.head) this.head.prev = newNode
    else this.tail = newNode
    this.head = newNode
}

LinkedList.prototype.push = function(value) {
    newNode = new Node(value, this.tail, null)
    if (this.tail) this.tail.next = newNode
    else this.head = newNode
    this.tail = newNode
}

LinkedList.prototype.shift = function() {
    if (this.head === this.tail) {
        this.tail = null
        this.head = null
    } else {
        this.head = this.head.next
        this.head.prev = null
    }
}

LinkedList.prototype.pop = function() {
    if (this.head === this.tail) {
        this.tail = null
        this.head = null
    } else {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

module.exports = { LinkedList }
