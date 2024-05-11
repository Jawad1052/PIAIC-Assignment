// EASY QUESTIONS
console.log("Hello, World!");
var temperature = 14.3;
if (temperature < 20) {
    console.log("Its Cold!");
}
console.log(10 - 3);
var firstName = "Muhammad";
var lastName = "Jawad";
var fullName = firstName + " " + lastName;
console.log(fullName);
if (5 > 3) {
    console.log("Yes");
}
else {
    console.log("No");
}
// MEDIUM QUESTIONS
function calculateArea(radius) {
    return 3.14 * radius * radius;
}
for (var i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0)
        console.log("Buzz");
    else {
        console.log(i);
    }
}
var temperatures = [12, 33, 44, 575, 11];
var highest = 0;
for (var i = 0; i < temperatures.length; i++) {
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
function arrayNumber(numArr) {
    var count = 0;
    numArr.forEach(function (element) {
        if (element > 0) {
            count += 1;
        }
    });
    return count;
}
var countPositive = arrayNumber([1, -3, 4, 5, -6, -9]);
console.log("No of Positive Count in Array " + countPositive);
function arrayWords(arrWord) {
    var result = [];
    arrWord.forEach(function (element) {
        if (element[0] == "a" || element[0] == "A") {
            result.push(element);
        }
    });
    return result;
}
var contain = arrayWords(["Hi", "alan", "ambani", "Audrey", "Neil"]);
console.log(contain);
var fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.slice(-2, -1));
function squareNumbers(numbs) {
    var resultNum = [];
    numbs.forEach(function (element) {
        resultNum.push(element * element);
    });
    return resultNum;
}
var resultSqaure = squareNumbers([1, 2, 3, 4, 5]);
console.log(resultSqaure);
function reverseArray(nums) {
    var resultReverse = [];
    for (var i = nums.length - 1; i >= 0; i--) {
        resultReverse.push(nums[i]);
    }
    return resultReverse;
}
var resultRev = reverseArray([1, 2, 3, 4, 5]);
console.log(resultRev);
function scoreMax(numbs) {
    var maxCount = 0;
    var minCount = 0;
    var max = Math.max.apply(Math, numbs);
    var min = Math.min.apply(Math, numbs);
    numbs.forEach(function (j) {
        if (j > max) {
            maxCount++;
        }
    });
    numbs.forEach(function (k) {
        if (k < min) {
            minCount++;
        }
    });
    console.log(max, min);
    console.log(maxCount + " number of times score exceeded maximum");
    console.log(minCount + " number of times score felled below minimum");
}
scoreMax([10, 5, 26, 20, 4, 5, 2, 25, 1]);
function falsyRemove(arrayF) {
    return arrayF.filter(function (element) {
        return (element !== false &&
            element !== null &&
            element !== 0 &&
            element !== "" &&
            element !== undefined);
    });
}
var result = falsyRemove([1, 2, 3, null, 0, "", undefined, NaN]);
console.log(result);
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = array1.concat(array2);
console.log(array3);
function sumEelements(array) {
    var sum = 0;
    array.forEach(function (element) {
        sum = sum + element;
    });
    console.log("Sum of Array " + sum);
}
sumEelements([1, 2, 32, 1, 2]);
function presentElement(array, checkNum) {
    array.forEach(function (element, j) {
        if (element == checkNum) {
            console.log("Element is Present at index", j);
        }
        else {
            return -1;
        }
    });
}
presentElement([1, 2, 38, 1, 2], 38);
function smallest(array) {
    var lowest = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < lowest) {
            lowest = array[i];
        }
    }
    console.log("Lowest Tempearture " + lowest);
}
smallest([12, 33, 44, 575, 11]);
