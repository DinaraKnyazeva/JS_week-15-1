let button = document.getElementById("button"); //кнопка
let inputNumber = document.getElementById("input-number"); //инпут
let quantityContainer = document.getElementById("quantity"); //контейнер для результата "цифр в числе"
let sumContainer = document.getElementById("sum"); //контейнер для результата "сумма"
let reverseContainer = document.getElementById("reverse"); //контейнер для результата "обратный порядок"

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); //отменяем стандартное поведение браузера
  //вывожу данные из инпута
  let number = inputNumber.value;
  //перевожу в массив
  let array = Array.from(number.toString(), Number);
  //кол-во цифр в числе
  let quantity = array.length;
  quantityContainer.innerText = `Цифр в числе: ${quantity}`;
  //суммирую массив
  add = function (arr) {
    return array.reduce((a, b) => a + b, 0);
  };
  let sum = add(array);
  sumContainer.innerText = `Сумма: ${sum}`;
  //обратный порядок массива
  let reversed = array.reverse();
  let newReversed = reversed.join("");
  reverseContainer.innerText = `Обратный порядок: ${newReversed}`;
});
