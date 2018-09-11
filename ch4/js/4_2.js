/* Write a recursive function to count the number of items in a list. */

/* QUESTION: can I assume to have a Linked List already implemented in JS
** and just make up the interfaces?
** e.g., list.next() gets the next item and advances the pointer by one
** list.prev() gets the previous item and regresses(?) the pointer by one
** list.end() gets the last item and advances the pointer to the end
*/

/* QUESTION: in a typical Linked List implementation
** does referencing tail() or end() also advance the pointer there?
** meaning I would have to start from there before accessing any further items?
*/

exports.count = function countList(list) {
    // base case
    if (!list.head) return 0
    if (list.head === list.tail) return 1
    // recurse case
    list.removeHead()
    return 1 + countList(list)
}