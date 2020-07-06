"use strict";

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
