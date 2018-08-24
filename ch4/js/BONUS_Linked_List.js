/* linked list implentation
** LinkedList should know about only current item, head, and tail
** current item knows about its prev and next neighbors
** head and tail are items and therefore know about their prev and next neighbors
*/

function LinkedList() {
    var head
    var tail
    var pointer

    return {
        addItem: function(item) {
            item = new LinkedListItem(pointer, item)
            
            if (!head) {
                head = item
            }
            
            pointer = tail = item;
        }
    }
}

function LinkedListItem(cur, item) {
    var data = item
    var prev = cur.setNext(item)
    var next = cur.next()

    return {
        getNext: function() {

        },
        getPrev: function() {

        },
        setNext: function() {
            
        }
    }
}