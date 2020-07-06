"use strict";

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
