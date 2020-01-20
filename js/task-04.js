'use strict';

const credits = 23580;
const pricePerDroid = 3000 ;

let message;
const wantDroid = prompt(' Количество дроидов, которые Вы хотите купить');
const totalPrice = Number(wantDroid) * pricePerDroid;
const creditsLeft = credits - totalPrice;

if (wantDroid === null) {
    console.log(`Отменено пользователем!`);
}
else if (totalPrice > credits) {
    console.log(`Недостаточно средств на счету`);
}
else if (totalPrice <= credits) {
    console.log (`Вы купили ${wantDroid} дроидов, на счету осталось ${creditsLeft} кредитов.`);
}


 