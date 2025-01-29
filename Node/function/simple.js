// const var1 = function fact(n, m) {
//   return n + m;
// };
// console.log(var1(4, 7));

// var a = function (a, b) {
//   return a - b;
// };
// console.log(a(10, 4));

// function fact(n) {
//   if (n > 0) {
//     return n * fact(n - 1);
//   } else return 1;
// }
// console.log(fact(3));

// const a = function fact(n) {
//   if (n > 0) {
//     return n * fact(n - 1);
//   } else return 1;
// };
// console.log(a(4));

function fact(n = 3) {
  var f;
  if (n > 0) {
    return n * fact(n - 1);
  } else return 1;
}
console.log(fact());

// var a = (n) => {
//   if (n > 0) {
//     return n * a(n - 1);
//   } else return 1;
// };
// console.log(a(4));
