//Create this object through “class”

// class Car {
//   constructor(Model, color, engine) {
//     console.log(Model + " " + color + " " + engine);
//   }
//   start() {
//     console.log("Car is Awesome");
//   }
// }
// var ford = new Car(2019, "Black", "V8 Turbo");
// ford.start();

//Create this object as literal

// var car = {
//   Model: 2018,
//   Color: "Red",
//   Engine: "V8 Turbo",
//   start: function () {
//     return "Car is Running";
//   },
// };
// console.log(car.Model);
// console.log(car.Color);
// console.log(car.Engine);
// console.log(car.start());

// Create same object using Object() constructor

var car = new Car();
car.Model = 2018;
car.Color = "Black";
car.Engine = "V8 Turbo +2";
function start() {
  console.log("Awesome");
}

console.log(car.Model);
console.log(car.Color);
console.log(car.Engine);
console.log(start());

var car = new Object();
car.Model = 2018;
car.Color = "Black";
car.Engine = "V8 Turbo +2";
car.start = function () {
  console.log("Awesome");
};

console.log(car.Model);
console.log(car.Color);
console.log(car.Engine);
car.start();
