// //Question 2
function isEven(num) {
    if (num % 2 === 0) {
        return "The Number Is Even";
    } else {
        return "The Number Is Odd";
    }
}

const evenOddResult = isEven(21);
console.log(evenOddResult);


// //Question 3
const arr = [20, 10, 15, , 5, 7, 1, 3, 6, 9, 14, 16, 18, 19, 13, 11];
arr.sort((a, b) => a - b);
console.log(arr)


// //Question 4
function isLeapYear(year) {
    if (year % 4 === 0) {
        return "This is a Leap Year";
    } else {
        return "This is not a Leap Year";
    }
}

const leapYearResult = isLeapYear(2020);
console.log(leapYearResult);


// //Question 5
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}


// //Question 6
var friend = ["Rahim", "Karim", "Abudl", "Sad", "HeroAlom"];
let largestName = "";

for (let i = 0; i < friend.length; i++) {
    if (friend[i].length > largestName.length) {
        largestName = friend[i];
    }
}

console.log("The largest name is:", largestName);


// //Question 7
var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var uniqueNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
        uniqueNumbers.push(numbers[i]);
    }
}

console.log("Array with duplicates removed:", uniqueNumbers);



// //Question 8
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let largeNumber = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largeNumber) {
        largeNumber = numbers[i];
    }
}
console.log("The largest number is:", largeNumber);


//Question 9
function monthlySavings(salary, livingCost) {
    // console.log(typeof salary);
    let totalSalary = 0;
    if (typeof salary != "object") {
        return "Invalid Input";
    }
    else {
        for (let i = 0; i < salary.length; i++) {
            if (salary[i] >= 3000) {
                salary[i] = salary[i] - salary[i] * 0.2;
                totalSalary += salary[i];
            }
            else {
                totalSalary += salary[i];
            }
        }
    }
    let savings = totalSalary - livingCost;
    if (savings <= 0) {
        return "Earn Money";
    }
    return savings;

}
const monthlySavingsResult = monthlySavings(100, [900, 2700, 3400]);
console.log(monthlySavingsResult);