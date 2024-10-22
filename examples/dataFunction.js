const sayHello = (name) => console.log("Hello " + name);

const sayHello2 = sayHello;
sayHello2("Shaun");

const myFunction = true
  ? () => console.log("First option")
  : () => console.log("Second option");

const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time-intensive operations here!
};

const fetchDataFake = () => ({
  name: "John Doe",
  age: 34,
});

const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;

const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 3;
const add5 = (x) => x + 5;

const myNumber = 42;

const doubled = double(myNumber);
const minusOne = subtractOne(doubled);
// ...

const functionsArray = [double, subtractOne, triple, add5, Math.sqrt];

var number = 42;

functionsArray.forEach((func) => (number = func(number)));

console.log(number);

// Passing functions as arguements
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = (func) => func(2, 3);

combine2and3(add); // -> 2 + 3
combine2and3((x, y) => x + y);
combine2and3(subtract); // -> 2 - 3

combine2and3(Math.max); // -> 3

// Returning functions
const createMultiplier = (y) => (x) => x * y;

const double4 = createMultiplier(2);
const triple4 = createMultiplier(3);
const quadruple = createMultiplier(4);

double4(3);
