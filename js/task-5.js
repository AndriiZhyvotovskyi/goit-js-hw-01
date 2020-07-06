"use strict";

const input = prompt("введите страну");
let message;

if (input === null) {
  message = "Отменено пользователем!";
} else if (input === "") {
  message = "Вы ничего не указали";
} else {
  message = "Эта страна не доступна";
}

console.log(message);

// const inputNormalize = input[0].toUpperCase() + input.slice(1).toLowerCase();
// console.log(inputNormalize);

// const country = input;
let result;

switch (input) {
  case "китай":
    price = 100;
    result = `Доставка в ${input} будет стоить ${price} кредитов`;
    break;

  case "чили":
    price = 250;
    result = `Доставка в ${input} будет стоить ${price} кредитов`;
    break;

  case "австралия":
    price = 170;
    result = `Доставка в ${input} будет стоить ${price} кредитов`;
    break;

  case "индия":
    price = 80;
    result = `Доставка в ${input} будет стоить ${price} кредитов`;
    break;

  case "ямайка":
    price = 120;
    result = `Доставка в ${input} будет стоить ${price} кредитов`;
    break;

  default:
    result = "неверный ввод";
}

console.log(result);
