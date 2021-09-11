//JSON => stringify, parse
const student = {
  name: "sakib",
  age: 32,
  movies: ["king", "dhakar mastan"],
};
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

//2. fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));

//keys,values
const keys = Object.keys(student);
const value = Object.values(student);
//for
const numbers = [23, 45, 65, 77, 67, 56, 453, 65];
numbers.forEach((num) => console.log(num)); //return dbena tai
numbers.map((num) => num * 2); //return dbe

//for of on array like object
//loop on an object using for in

//add or remove from an aray
const products = [
  { name: "laptop", price: 3200, brand: "lenovo", color: "silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglass", price: 300, brand: "raymond", color: "black" },
  { name: "camera", price: 9000, brand: "canon", color: "gray" },
];

const newProduct = { name: "webcam", price: 600, brand: "Lal" };

//copy products array and then add newProduct

const newProducts = [...products, newProduct];
console.log(newProducts);

//create a new array without one specific array
//remove phone means create a new array without the property
const remaining = products.filter((product) => product.name !== phone);
