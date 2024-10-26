const string = 'JavaScript';
const letters = string.split('');
let inwertedString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);
    
    // if (letter === letter.toLowerCase()) {
    //     console.log('Эта буква в нижнем регистре', letter);
    
    //     inwertedString += letter.toUpperCase();
    // } else {
    //     inwertedString += letter.toLowerCase();
    // }

    inwertedString += letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();
}
console.log(inwertedString);