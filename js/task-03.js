// ЗАДАНИЕ 3
'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const userInput = prompt('Введите пароль');

if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}
else if (userInput === null) {
    message = 'Отменено пользователем!';
}
else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert (message);