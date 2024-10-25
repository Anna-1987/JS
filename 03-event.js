// посчитать сумму всех четных чисел в массиве 
const numbers = [1, 5, 9,8, 12, 4, 15, 27, 30, 18, 11];
let total = 0;

// 1 переменная тотал
// 2 перебрать массив
// 3 на каждой итерации проверить элемент на четность
// 4 если четное плюсуем к тотал


// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {
//         console.log('четное!');

//         total += numbers[i];

//     }
// }


// for (const number of numbers) {
//     console.log( number );

//     if (number % 2 === 0) {
//         console.log(`четное!`);

//         total += number;
//     }
    
// }



for (const number of numbers) {
    // console.log( number );

    if (number % 2 !== 0) {
        console.log(`Эту итерацию нужно пропустить`, number);
        continue;
    }
    console.log('четное', number)
    total += number;   
}
console.log('TOTAL =', total);
