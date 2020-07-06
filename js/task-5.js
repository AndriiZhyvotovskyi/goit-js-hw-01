"use strict";

let message;
let price;

const inputStart = prompt("введите страну");

if (inputStart === null) {
  message = "Отменено пользователем!";
  console.log(message);
} else if (inputStart === "") {
  message = "Вы ввели пустую строку";
  console.log(message);
} else {
  const country = inputStart.toLowerCase();
  const inputNormalize =
    inputStart[0].toUpperCase() + inputStart.slice(1).toLowerCase();

  switch (country) {
    case "китай":
      price = 100;
      message = `Доставка в ${inputNormalize} будет стоить ${price} кредитов`;
      break;

    case "чили":
      price = 250;
      message = `Доставка в ${inputNormalize} будет стоить ${price} кредитов`;
      break;

    case "австралия":
      price = 170;
      message = `Доставка в ${inputNormalize} будет стоить ${price} кредитов`;
      break;

    case "индия":
      price = 80;
      message = `Доставка в ${inputNormalize} будет стоить ${price} кредитов`;
      break;

    case "ямайка":
      price = 120;
      message = `Доставка в ${inputNormalize} будет стоить ${price} кредитов`;
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
  console.log(message);
}
