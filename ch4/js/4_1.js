/* Recursively sum the elements in an array */
const arr = process.argv.slice(2);

function sum(arr) {
    // base case: array has one or fewer elements
    if (arr.length <= 1) return +arr[0]
    /* recur case: remove first element of array
    ** and sum it with another call to sum
    ** taking the now-one-element-shorter array as arg
    */
    return +arr.shift() + sum(arr);
}

// same thing, but as an arrow fcn
const arrowSum = arr => arr.length <= 1 ? arr[0] : (arr.shift() + arrowrRecurSum(arr))

console.log(sum(arr));