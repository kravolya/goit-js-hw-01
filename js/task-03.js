// ЗАДАНИЕ 3
'use strict';

const PASSWORD = "kravolya";
const PASSWORD2 = "kravolya1";

const name1 = 'Olha';
const name2 = 'Olha1';

const userInput = prompt('Input password');

console.log(userInput);
if (userInput === PASSWORD) {
    console.log(`Добро пожаловать ${name1}`);
}

else if (userInput === PASSWORD2) {
    console.log(`Добро пожаловать ${name1}`);
}
else {
    console.log(`Доступ запрещен, неверный пароль!`);
}





