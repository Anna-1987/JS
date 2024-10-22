const friends = ['Mango', 'Kivi', 'Poly', 'Ajax'];
console.table(friends);
console.log(friends);

const lastIndex = friends.length - 1;//последний инднкс
console.log(lastIndex);

console.log(friends[3]);//так можна достучаться к элементу массива

friends[1] = 'Apple';// перезапись элемента в массиве

console.table(friends);

//********ПЕРЕБОР МАССИВА*****

for (let i = 0; i <= lastIndex; i += 1){
    console.log('цикл for',friends[i]);
}

for (const friend of friends) {
    console.log('цикл for..of', friend)
}