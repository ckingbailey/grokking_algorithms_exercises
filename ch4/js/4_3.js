/* Write a recursive function to find the maximum number in a list */

/* what's the process?
** 1. store the first item in the list
** 2. compare stored item to next item
**  - if stored is bigger, advance pointer and compare next item to stored
**  - if next is bigger, store it, advance pointer and compare next item to stored
*/
function findMax(list) { // does `list` always reference list.cur()?
    const max = list
    if (list.next() === list.end()) // is a fcn call w/i an if condition allowed in JS?
        return max > list
            ? max : list
    return max > list
        ? max : findMax(list)
}