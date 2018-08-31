/* linked list implentation
** LinkedList should know about only current item, head, and tail
** current item knows about its prev and next neighbors
** head and tail are items and therefore know about their prev and next neighbors

** NEW PLAN:
** copying the scheme from Little Linked List post on Hacker Noon
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

LinkedList.prototype.addToHead = (value) => {
    newNode = new Node(value, null, this.head);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
}