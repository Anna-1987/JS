
// посчитать общую сумму покупок в карзине

const cart = [54, 28, 105, 70, 92, 17, 120]
let total = 0;
// 1 перебрать массив
// 2 сделать переменную total до цикла
// 3 каждій елемент приплюсовать к total

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);

//     total = total + cart[i];
// }

for (const value of cart) {
    total += value;
}
    
console.log("TOTAL =", total)

