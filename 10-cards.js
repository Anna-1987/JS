const cards = [
    'карточка-1',
    'карточка-2',
    'карточка-3',
    'карточка-4',
    'карточка-5'
];

console.table(cards);

//удаление елементов по индексу

// const cardToRemove = 'карточка-3';

// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);


//  Добавить карточку
// const cardToInsert = 'карточка-6';

// const index = cards.indexOf(cardToInsert);
// console.log(index);


// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// Обновить карточку

const cardToUpdate = 'карточка-4';

const index = cards.indexOf(cardToUpdate);
console.log(index);

cards.splice(index, 1, 'новая карточка-4');
console.table(cards);







