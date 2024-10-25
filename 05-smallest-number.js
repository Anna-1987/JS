const numbers = [51, 18, 13, 24, 7, 85, 19, 0, -8];
let smallestNumber = numbers[0];

// console.log(smallestNumber);

for (const number of numbers) {

    if (number < smallestNumber) {
        smallestNumber = number;
    }
}
console.log('Самое маленькое число', smallestNumber);

for (const number of numbers) {

    if (number > smallestNumber) {
        smallestNumber = number;
    }
}

console.log('Самое большое число', smallestNumber);


