// EASY QUESTIONS

console.log("Hello, World!");

let temperature: number = 14.3;
if (temperature < 20) {
  console.log("Its Cold!");
}

console.log(10 - 3);

let firstName: string = "Muhammad";
let lastName: string = "Jawad";
let fullName: string = firstName + " " + lastName;
console.log(fullName);

if (5 > 3) {
  console.log("Yes");
} else {
  console.log("No");
}

// MEDIUM QUESTIONS
function calculateArea(radius: number): number {
  return 3.14 * radius * radius;
}

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) console.log("Buzz");
  else {
    console.log(i);
  }
}

let temperatures = [12, 33, 44, 575, 11];
let highest: number = 0;
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > highest) {
    highest = temperatures[i];
  }
  console.log("Highest Tempaerature" + highest);
}

// const userInput: string | null = prompt("Enter your Age:");

// if (userInput !== null) {
//   const userAge: number = parseInt(userInput);

//   if (userAge < 18) {
//     console.log("You are Minor");
//   } else {
//     console.log("You are Adult");
//   }
// }
function arrayNumber(numArr: number[]): number {
  let count: number = 0;
  numArr.forEach((element) => {
    if (element > 0) {
      count += 1;
    }
  });
  return count;
}
let countPositive = arrayNumber([1, -3, 4, 5, -6, -9]);
console.log("No of Positive Count in Array " + countPositive);

function arrayWords(arrWord: string[]): string[] {
  const result: string[] = [];
  arrWord.forEach((element) => {
    if (element[0] == "a" || element[0] == "A") {
      result.push(element);
    }
  });
  return result;
}
let contain = arrayWords(["Hi", "alan", "ambani", "Audrey", "Neil"]);
console.log(contain);

const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.slice(-2, -1));

function squareNumbers(numbs: number[]): number[] {
  const resultNum: number[] = [];
  numbs.forEach((element) => {
    resultNum.push(element * element);
  });
  return resultNum;
}
const resultSqaure = squareNumbers([1, 2, 3, 4, 5]);
console.log(resultSqaure);

function reverseArray(nums: number[]): number[] {
  const resultReverse: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    resultReverse.push(nums[i]);
  }

  return resultReverse;
}
const resultRev = reverseArray([1, 2, 3, 4, 5]);
console.log(resultRev);

function scoreMax(numbs: number[]) {
  let maxCount: number = 0;
  let minCount: number = 0;
  let max: number = Math.max(...numbs);
  let min: number = Math.min(...numbs);
  numbs.forEach((j) => {
    if (j > max) {
      maxCount++;
    }
  });
  numbs.forEach((k) => {
    if (k < min) {
      minCount++;
    }
  });
  console.log(max, min);
  console.log(maxCount + " number of times score exceeded maximum");
  console.log(minCount + " number of times score felled below minimum");
}
scoreMax([10, 5, 26, 20, 4, 5, 2, 25, 1]);

function falsyRemove(arrayF: any[]): any[] {
  return arrayF.filter((element) => {
    return (
      element !== false &&
      element !== null &&
      element !== 0 &&
      element !== "" &&
      element !== undefined
    );
  });
}

const result = falsyRemove([1, 2, 3, null, 0, "", undefined, NaN]);
console.log(result);

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3);

function sumEelements(array: number[]) {
  let sum: number = 0;
  array.forEach((element) => {
    sum = sum + element;
  });
  console.log("Sum of Array " + sum);
}
sumEelements([1, 2, 32, 1, 2]);

function presentElement(array: number[], checkNum: number) {
  array.forEach((element, j) => {
    if (element == checkNum) {
      console.log("Element is Present at index", j);
    } else {
      return -1;
    }
  });
}
presentElement([1, 2, 38, 1, 2], 38);

function smallest(array: number[]) {
  let lowest: number = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < lowest) {
      lowest = array[i];
    }
  }
  console.log("Lowest Element in Array " + lowest);
}
smallest([12, 33, 44, 575, 11]);
