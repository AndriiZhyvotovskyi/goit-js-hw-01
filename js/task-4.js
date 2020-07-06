"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let message;
let balance;

const countDroid = prompt("необходимое количество дроидов");
// console.log(countDroid);
if (countDroid === null) {
  message = "Отменено пользователем!";
} else if (countDroid > 0) {
  totalPrice = countDroid * pricePerDroid;
} else {
  message = "Доступ запрещен, неверный пароль!";
}
console.log(message);

if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  balance = credits - totalPrice;
  message = `Вы купили ${countDroid} дроидов, на счету осталось ${balance} кредитов.`;
}
console.log(message);
