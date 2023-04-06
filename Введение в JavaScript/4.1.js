//1.Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше,
//чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

"use strict";
function firstMyFunction () {
    let total = 0;              //счетчик
    switch (true) {             //оператором сравниваем числа и записываем счетчик
    case (x < y):
        total = -1;
        break;
    case (x > y):
        total = 1;
        break;
    case (x == y):
        total = 0;
        break;
    }
    return total;       //возвращаем счетчик
}
let x = prompt("Введите первое число");
let y = prompt("Введите второе число");
console.log(firstMyFunction ());    //выводим функцию



//2/Написать функцию, которая вычисляет факториал переданного ей числа.

"use strict";
function factorial () {
    let sum = yourNumber;       //добавляем счетчик
    while (yourNumber != 1) {       //цикл поиска факториала
        yourNumber--;
        sum *= yourNumber;
    }
    return sum;     //возвращаем счетчик
}
let yourNumber = +prompt("Введите число");
console.log(factorial());       //выводим функцию



//3. функцию, которая принимает три отдельные цифры и превращает их в одно
//число. Например: цифры 1, 4, 9 превратятся в число 149.

"use strict";
function allNumbers () {
    let sum = String(numberOne + numberTwo + numberThree);  //переводим числа в строки
    return sum;     //возвращаем строку
}
let numberOne = prompt("Введите первую цифру");
let numberTwo = prompt("Введите вторую цифру");
let numberThree = prompt("Введите третью цифру");
console.log(allNumbers());      //выводим функцию



//4.Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет
//его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

"use strict";
function rectangle () {
    let plosh = long * short;       //формула площади прямоугольника
    switch (true) {             //формула квадрата при вводе одной стороны
        case (short == 0 || short == ""):
            plosh = long * long;
            break;
        case (long == 0 || long == ""):
            plosh = short * short;
            break;
    }
    return plosh;           //возвращаем площадь
}
let long = prompt("Введите длинну");
let short = prompt("Введите ширину");
console.log(rectangle());       //выводим функцию



//5.Написать функцию, которая проверяет, является ли переданное ей число совершенным.
//Совершенное число – это число, равное сумме всех своих собственных делителей.

"use strict";
function perfect () {
    let answer = "";         //ответ является или нет
    let multiplier = 1;     //счетчик для поиска делителей
    let count = 0;     //счетчик для хранения делителей
    while (multiplier <= numberFirst - 1) {         //находим все делители
        if (numberFirst % multiplier == 0) {
            count += multiplier;
            }
        multiplier++;
    }
    if (numberFirst == count){      //расчитываем условие
        answer = "Является совершенным числом";
    } else {
        answer = "Не является совершенным числом";
    }
    return answer;      //возвращаем условие
}
let numberFirst = prompt("Введите ваше число");
console.log(perfect());     //выводим функцию



//6.Написать функцию, которая принимает минимальное и максимальное значения для
//диапазона, и выводит только те числа из диапазона, которые являются совершенными.
//Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

//ИСПОЛЬЗУЕТСЯ ФУНКЦИЯ ИЗ ПРОШЛОГО ЗАДАНИЯ
"use strict";
let numberFirst = prompt("Введите ваше1 число");
let numberSecond = prompt("Введите ваше2 число");


function diapazon () {          //функция для диапазона
    numberSecond++;             //прибавляем 1 чтобы перебирал включительно до максимума
    let count1 = "";            //счетчик для записи
    while (numberFirst <= numberSecond) {               //цикл для перебора диапазона
        perfect();                              //вызываем функцию
        if (perfect () == "Является совершенным числом") {
            count1 += numberFirst + " ";        //записываем все совершенные числа
        }
        numberFirst++;
    }
    return count1;
}
console.log(diapazon());



//7.Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его
//на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не
//были переданы, то выводить их как 00.

"use strict";
function time () {
    switch (true) {             //если в значении пусто то выводит 00
        case (hour == ""):
            hour = "00";
        case (minutes == ""):
            minutes = "00";
        case (second == ""):
            second = "00";
    }
    let fullTime = `${hour}:${minutes}:${second}`;      //записывает в себя полное время
    return fullTime;        //возвращает время
}
let hour = prompt("Введите часы");
let minutes = prompt("Введите минуты");
let second = prompt("Введите секунды");
alert(time());          //выводит время



//8.Написать функцию, которая принимает часы, минуты и секунды и возвращает это
//время в секундах.

"use strict";
function time () {
    hour *= 3600;               //переводит часы в секунды
    minutes *= 60;              //переводит минуты в секунды
    let fullTime = hour + minutes + second;     //считает общее секунд
    return fullTime;                              //возвращает секунды
}
let hour = +prompt("Введите часы");
let minutes = +prompt("Введите минуты");
let second = +prompt("Введите секунды");
alert("В секундах это будет: " + time());       //выводит секунды



//9.Написать функцию, которая принимает количество секунд, переводит их в часы,
//минуты и секунды и возвращает в виде строки «чч:мм:сс».

"use strict";
function time () {
    let hour = 0;
    let minutes = 0;
    switch (true) {
        case (second >= 3600):
            hour = Math.floor(second / 3600);
            second = second - (hour * 3600);
        case (second < 3600):
            minutes = Math.floor(second / 60);
            second = second - (minutes * 60);
    }
    //СВЕРХУ БЛОК КОТОРЫЙ ПЕРЕВОДИТ СЕКУНДЫ В ТОЧНОЕ ВРЕМЯ
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (second < 10) {
        second = "0" + second;
    }
    let fullTime = `${hour}:${minutes}:${second}`
    //СВЕРХУ БЛОК КОТОРЫЙ СТАВИТ НУЛИ ЕСЛИ ЧИСЛО МЕНЬШЕ 10
    return fullTime;        //возвращает полное время

}
let second = +prompt("Введите секунды");
alert("Полное время составит: " + time());          //выводит полное время



//10.Написать функцию, которая считает разницу между датами. Функция принимает 6
//параметров, которые описывают 2 даты, и возвращает результат в виде строки
//«чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х
//заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах,
//а потом разницу переведите обратно в «чч:мм:сс».

"use strict";
function time () {
    var dataFirst = 0;
    var dataSecond = 0;
    hour *= 3600;               //переводит часы в секунды
    minutes *= 60;              //переводит минуты в секунды
    let fullTime = hour + minutes + second;     //считает общее секунд
    return fullTime;                              //возвращает секунды
}
for (var i = 1;i <=2; i++) {
    confirm("Введите дату № " + i);
    var hour = +prompt("Введите часы");
    var minutes = +prompt("Введите минуты");
    var second = +prompt("Введите секунды");
    console.log(`В дате № ${i}: ${time()} секунд`);
    console.log(i);
}
//Я не доделал и просто вывел по очереди функции которые возвращают время в секундах
