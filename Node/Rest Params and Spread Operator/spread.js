// var arr1 = [1, 2, 3, 4];
// var arr2 = [...arr1, 5, 6, 7, 8];
// console.log(arr2);

// var object = { model: "key value", dsdd: "23" };
// var object1 = { ...object, mode: "test" };

// console.log(object1);

var a = (...n) => {
  var arr = [...n, 2, 3];
  console.log(arr);
};
a(1, 2);
