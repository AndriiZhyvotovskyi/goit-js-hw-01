"use strict";
const priceOne = 100;
const priceTwo = 250;
const priceThree = 170;
const priceFour = 80;
const priceFive = 120;

const country = prompt("введите страну");
const inputNormalize = country.toLowerCase();
console.log(inputNormalize);

// const country = input;
let result;

switch (country) {
  case "Китай":
    result = `Доставка в ${country} будет стоить ${priceOne} кредитов`;
    break;

  case "Чили":
    result = `Доставка в ${country} будет стоить ${priceTwo} кредитов`;
    break;

  case "Австралия":
    result = `Доставка в ${country} будет стоить ${priceThree} кредитов`;
    break;

  case "Индия":
    result = `Доставка в ${country} будет стоить ${priceFour} кредитов`;
    break;

  case "Ямайка":
    result = `Доставка в ${country} будет стоить ${priceFive} кредитов`;
    break;

  default:
    result = "неверный ввод";
}

console.log(result);
