const fatherName = "Arnold";
let season = "rainy";
season = "winter";

//condititon >,<,===, !==, <=,>=
//multiple condition: &&, ||

if (fatherName === "arnold" || season === "rainy") {
} else if (fatherName === "Arnold") {
} else {
}

//3.arrray
//index
//length, push,
const numbers = [98, 34, 58, 69];

numbers[0] = 56;

//4.loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}
//5. function
function mul(num1, num2) {
  const res = num1 + num2;
  return res;
}
const output = mul(10, 20);
console.log(output);

//6. object
//3 ways to access property
const student = {
  name: "Akther",
  roll: 2034165,
  age: 21,
  job: "student",
  movie: ["king", "khan"],
};
const my = "age";
console.log(student.age); //direct by property
console.log(student["age"]); //direct via string
console.log(student[my]); //access via property name in a variable
