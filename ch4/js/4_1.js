/* Recursively sum the elements in an array */

function recurSum(arr) {
    // base case: array has one or fewer elements
    if (arr.length <= 1) return arr[0]
    /* recur case: remove first element of array
    ** and sum it with another call to recurSum
    ** taking the now-one-element-shorter array as arg
    */
    return arr.unshift() + recurSum(arr);
}

// same thing, but as an arrow fcn
const arrowRecurSum =
    arr => arr.length <= 1 ? arr[0] : (arr.unshift() + arrowrRecurSum(arr))