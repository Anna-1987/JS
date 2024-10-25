const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     console.log('login:', login);
//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
    
// }

// for (const login of logins){

//     console.log('login:', login);
//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
    
// }

const message = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind}  найден`
    : `Пользователь ${loginToFind} не найден`; 
console.log(message, `${loginToFind}`);