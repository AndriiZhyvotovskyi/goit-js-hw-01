"use strict";

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
