//1.array destructuring

const numbers = [42, 65];
// 1. const x = numbers[0];
// 1.const y = numbers[1];
// 2.const [x, y] = [42, 65];
//3.
const [x, y] = numbers;
function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
const [first, second] = boxify(90, 32);
console.log(boxify(90, 32));

const student = {
  name: "sakib",
  age: 32,
  movies: ["king", "dhakar mastan"],
};

const [firstMovie, secondMovie] = student.movie;

//Object destructuring
const { name, age } = {
  name: "alu",
  age: 14,
};

const { name, age, salay, id } = {
  name: "alu",
  age: 14,
  id: 100,
  salary: 3400,
};

const employee = {
  ide: "vsCode",
  designation: "developer",
  machine: "windows",
  languages: ["html", "css", "js", "java"],
  specification: {
    height: 66,
    weight: 67,
    address: "Kumarkhali",
    drink: "water",
    watch: {
      color: "black",
      price: 500,
      brand: "garlick",
    },
  },
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
console.log(brand);
