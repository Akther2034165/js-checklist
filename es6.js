//
const numbers = [98, 34, 58, 69];
const student = {
  name: "sakib",
  age: 32,
  movies: ["king", "dhakar mastan"],
};
const about = `My name is ${student.name} & My age is ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//arrow function
const getFiftyfive = () => 55;
const add = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (num1, num2, num3) => num1 + num2 + num3;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

//spread operator(...)
const newNumbers = [...numbers];
numbers.push(99);

//create a new array from an older array and add a new element
const currentNumbers = [...numbers, 55];
console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
