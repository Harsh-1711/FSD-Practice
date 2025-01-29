// create a constant array and add 2 elements in it and try to redefine it and note the output
const arr = [1, 2, 3, 4];
arr = [2, 34, 4];
console.log(arr);

// arr = [2, 34, 4];
//     ^

// TypeError: Assignment to constant variable.
