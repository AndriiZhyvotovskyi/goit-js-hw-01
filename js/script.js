"use strict";
//task 1

const name = "Генератор защитного поля";
let price = 1000;

console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

price = 2000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

//task 2

const total = 100;
let ordered = 50;

if (ordered > total) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

ordered = 20;
console.log(
  `при условии, что количество товаров на складе - ${total}, а единиц товара в заказе - ${ordered}`
);

if (ordered > total) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

ordered = 80;
console.log(
  `при условии, что количество товаров на складе - ${total}, а единиц товара в заказе - ${ordered}`
);

if (ordered > total) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

ordered = 130;
console.log(
  `при условии, что количество товаров на складе - ${total}, а единиц товара в заказе - ${ordered}`
);

if (ordered > total) {
  console.log("На складе недостаточно твоаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}

//task 3

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const input = prompt("введите пароль");

if (input === null) {
  message = "Отменено пользователем!";
} else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);

//task 4

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const countDroid = prompt("необходимое количество дроидов?");

if (countDroid === null) {
  alert("Отменено пользователем!");
} else {
  totalPrice = countDroid * pricePerDroid;
  const balance = credits - totalPrice;
  alert(
    credits >= totalPrice
      ? `Вы купили ${countDroid} дроидов, на счету осталось ${balance} кредитов.`
      : "Недостаточно средств на счету!"
  );
}

//task 5

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

//task 6

let total = 0;

do {
  let input = prompt("Введите число");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  } else if (input === "") {
    alert("вы ничего не ввели");
  }
  input = Number(input);
  const checkNaN = isNaN(input);

  if (checkNaN) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  total += input;
} while (true);

alert(`Общая сумма чисел равна ${total}`);
