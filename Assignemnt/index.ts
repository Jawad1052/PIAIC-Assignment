let greeting; // Assign "Hello, World!" to this variable and print it.
greeting = "Hello World";
console.log(greeting);

let num1, num2; // Assign integer values and perform arithmetic operations.
num1 = 3;
num2 = 4;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let a = 1,
  b = 2; // Swap these values without using a new variable.
[a, b] = [b, a];
console.log("Value of a " + a);
console.log("Value of b " + b);

let message: string; // Now try assigning a number to it and see what happens.
//message = 76;

let num3, num4; // Use the modulus operator (%) to find the remainder.
num3 = 10;
num4 = 3;
console.log(num3 % num4);

let counter = 0; // Increment this value by 1 in two different ways.
counter++;
counter += 1;
console.log(counter);

let c = true,
  d = false,
  e = true; // Write expressions using these.
console.log(c && d);
console.log(d || e);
console.log(!e);

let num = 10; // Use +=, -=, *=, and /= on this variable.
num += 5;
num -= 5;
num *= 5;
num /= 5;
console.log(num);

let number; // Determine if this is even or odd.
number = 10;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("False");
}

let age; // Check if age is 18 or older to determine voting eligibility.
age = 20;
if (age >= 18) {
  console.log("Eligible To Vote");
} else {
  console.log("Not Eligible To Vote");
}

let score; // Use conditionals to assign and print grades A, B, C, D, or F.
score = 78;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}

let x, y, z; // Determine the largest among these.
(x = 2), (y = 5), (z = 7);
if (z > y && z > x) {
  console.log("Z is the largest");
}

let fahrenheit; // Convert this to Celsius and print the result.
fahrenheit = 98;
let celcius = ((fahrenheit - 32) * 5) / 9;
console.log(celcius);

let numberSign; // Determine the sign of this number.
numberSign = 9;
if (numberSign > 0) {
  console.log("Number is Positive");
} else if (numberSign < 0) {
  console.log("Number is Negative");
} else if (numberSign == 0) {
  console.log("Number is Zero");
}

let numberTable; // Print the multiplication table for this number up to 10.
numberTable = 5;
for (let i = 0; i <= 10; i++) {
  console.log(`${numberTable} * ${i} = ${numberTable * i}`);
}
