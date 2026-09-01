// Task 1 — var, let, const

var studentName = " Shubhma";
let studentAge = 27;
const collegeName = "Git college";

// Print all values
console.log(studentName);
console.log(studentAge);
console.log(collegeName);

// Change var
studentName = "Rahul";
console.log(studentName);

// Change let
studentAge = 23;
console.log(studentAge);

// Try changing const
collegeName = "joti College";

// Redeclare var
var studentName = "Arun";
console.log(studentName);

// Redeclare let
let studentAge = 25;
console.log(studentAge);

console.clear();

//  Task 2 — User Information
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

console.clear();

// Task 3 — Welcome Message

let name = prompt("Enter your name:");
alert("Welcome " + name + "!");



// Task 4 — Age Calculator
let birthYear = prompt("Enter your birth year:");
let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", age);

console.clear();

// Task 5 — Identify Data Types
let value1 = "Hello";
let value2 = 100;
let value3 = 25.5;
let value4 = true;
let value5 = false;
let value6 = undefined;
let value7 = null;

console.log(typeof value1);
console.log(typeof value2);
console.log(typeof value3);
console.log(typeof value4);
console.log(typeof value5);
console.log(typeof value6);
console.log(typeof value7);

console.clear();

// Task 6 — Student Data
let student = {
    name: "shubham patil",
    age: 27,
    city: "belgaum",
    qualification: "MCA",
    isStudent: true
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

console.clear();

// Task 7 — Fruit Array

let fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Total number of fruits:", fruits.length);

console.clear();

// Arithmetic Operator Tasks
// Task 8 — Basic Calculator

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

console.clear();

// Task 9 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let total = shirt + pant + shoes;

console.log("Total =", total);

console.clear();

// Task 10 — Simple Marks Calculation
let tamil = 80;
let english = 75;
let maths = 90;

let total1 = tamil + english + maths;
let average = total1 / 3;

console.log("Total marks:", total1);
console.log("Average marks:", average);

console.clear();

// Task 11 — Post Increment
let a = 10;
let b = a++;

console.log(a);
console.log(b);

// answare=>
// a = 11
// b = 10

console.clear();

// Task 12 — Pre Increment
let a = 10;
let b = ++a;

console.log(a);
console.log(b);

// answare=>
// b = 11
// a = 11
console.clear();

// Task 13 — Post Decrement
let a = 20;
let b = a--;

console.log(a);
console.log(b);

// answare=>
// a = 19
// b = 20
console.clear();

// Task 14 — Pre Decrement
let a = 20;

let b = --a;

console.log(a);
console.log(b);

// answare=>
// a = 19
// b = 19
console.clear();

// Task 15 — Find the Final Values
let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);


// answare=>
// a = 7
// b = 4
// c = 7
// d = 5
console.clear();

// Task 16 — Assignment Operators

// addition
let num = 10;
num += 5;
console.log(num);
// answare=>15

// subtraction
let num = 10;
num -= 5;
console.log(num);
// answare=>5

// multiplication
let num = 10;
num *= 5;
console.log(num);
// answare=>50

// division
let num = 10;
num /= 5;
console.log(num);
// answare=>2

// modulus
let num = 10;
num %= 5;
console.log(num);
// answare=>0

// **=
let num = 10;
num **= 5;
console.log(num);
// answare=>100000

console.clear();

// Task 17 — Mini Student Profile
let name = "shubbham patil";
let age = 27;
let city = "belgavm";
let college = "GIT College";

let subjects = [
    "Tamil",
    "English",
    "Maths",
    "Science",
    "Computer"
];

let student = {
    name: name,
    age: age,
    city: city,
    subjects: subjects,
    isStudent: true
};

console.log("Student name:", name);
console.log("Student age:", age);
console.log("City:", city);
console.log("First subject:", subjects[0]);
console.log("Last subject:", subjects[subjects.length - 1]);
console.log("Total subjects:", subjects.length);
console.log("Complete object:", student);

console.clear();

//  Final Challenge — User + Calculator
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);

console.clear();