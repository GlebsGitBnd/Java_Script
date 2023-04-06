let digits = document.getElementsByTagName('td');   //связываем переменную с тегом
                                                     //откуда будем забирать значение для вычисления

let answer = document.getElementById("main");       //связываем переменную с id divа
                                                    //для будущего вывода ответа в div

let yourString = "";                          //для записи примера в строку
let sum = 0;                                  //для записи ответа

table.addEventListener("mousedown", function (e){       //меняется фон при нажатии мыши
  let target = event.target;
  target.style.background = "#777676"
})

table.addEventListener("mouseup", function (e){           //меняется фон если отпущена кнопка мыши
  let target = event.target;
  target.style.background = "#edeeee"
})

for (let i = 0; i < digits.length; i++) {
  console.log(i);
  digits[i].addEventListener("click", function () {      //записываем значение ячейки в строку
    console.log(i)
    yourString += this.innerHTML;
    answer.innerHTML += this.innerHTML;               //выводим нажатые значения на экран
    for (let i = 0; i < yourString.length; i++) {
      if (yourString[i] === "=") {                     //если нажали равно значит пример окончен
        yourString = yourString.substring(0, i)        //перезаписали переменную без равно
        sum = calculator();         //вызвали функцию из домашки про строки и записали в переменную
        answer.innerHTML += sum;                 //вывели ответ в div
        break;
      }
    }
  })
}

//функция из домашки про строки которая переводит строку в пример и считает ответ
function calculator() {
   let digitFirst = 0;         //для записи первого числа
   let digitSecond = 0;        //для записи второго числа
   let operPer = "";          //для записи оператора
   let sum = "";               //записывает в себя операцию
   for (let i = 0; i < yourString.length; i++) {
       if (isNaN(yourString[i]) === true) {    //проверяем элемент строки на число
           digitFirst = yourString.substring(0,i);
           digitFirst = Number(digitFirst);
           //возвращаем подстроку первого числа и объявляем переменную числом

           digitSecond = yourString.substring(i + 1);
           digitSecond = Number(digitSecond);
           //возвращаем подстроку второго числа и объявляем переменную числом

           operPer = yourString[i];       //записываем оператор
       }

       switch (true) {             //произвели все операции
           case (operPer == "+"):
               sum = digitFirst + digitSecond;
               break;
           case (operPer == "-"):
               sum = digitFirst - digitSecond;
               break;
           case (operPer == "/"):
               sum = digitFirst / digitSecond;
               break;
           case (operPer == "*"):
               sum = digitFirst * digitSecond;
               break;
       }
   }
   console.log("Ответ: " + sum);       //вывели ответ
  return sum;
}       //функция из домашки про строки которая
                              //переводит строку в пример и считает ответ