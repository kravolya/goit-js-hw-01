'use strict';

const deliveryCountry = prompt("Введите страну");
const deliveryCountryLow = deliveryCountry.toLowerCase();
let deliveryPrice ;
let message ;

switch (deliveryCountryLow) {
    case "китай":
        deliveryPrice = 100;
        message =`Shipping to ${deliveryCountry} will cost you ${deliveryPrice} credits`;
        break;
    case "чили":
        deliveryPrice = 250;
        message =`Shipping to ${deliveryCountry} will cost you ${deliveryPrice} credits`;
        break;
    case "австралия":
        deliveryPrice = 170;
        message =`Shipping to ${deliveryCountry} will cost you ${deliveryPrice} credits`;
        break;
    case "индия":
        deliveryPrice = 80;
        message =`Shipping to ${deliveryCountry} will cost you ${deliveryPrice} credits`;
        break;
    case "ямайка":
        deliveryPrice = 120;
        message =`Shipping to ${deliveryCountry} will cost you ${deliveryPrice} credits`;
        break;
    
    default: 
        message = 'В вашей стране доставка не доступна';
    

}
alert (message);