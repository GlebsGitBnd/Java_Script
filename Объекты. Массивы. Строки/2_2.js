////Задание 1
////Создать объект, описывающий автомобиль (производитель, модель, год выпуска,
////средняя скорость), и следующие функции для работы с этим объектом.
////1. Функция для вывода на экран информации об автомобиле.
////2. Функция для подсчета необходимого времени для преодоления переданного расстояния
////со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо
////делать перерыв на 1 час.
//
//"use strict";
//let myAuto = {
//    manufacturer: "Lada",
//    model: "Kalina",
//    year: 2007,
//    middleSpeed: 100
//}
////СОЗДАЛИ ОБЪЕКТ
//
////1.ФУНКЦИЯ ВЫВОДИТ НА ЭКРАН ДАННЫЕ
//function infoMyAuto() {
//    for (let i in myAuto) {
//        console.log(i + ": " + myAuto [i]);
//    }
//}
//infoMyAuto()
//
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
//
////2.ФУНКЦИЯ ВЫВОДИТ ВРЕМЯ ЗА ПРОЙДЕННЫЙ ПУТЬ(С ОТДЫХОМ)
//function goDistance() {
//    let distance = +prompt("Введите дистанцию(в км.)");
//    let relax = 0;
//    let hour = 0;
//    let minutes = 0;
//    for (let i = 0; i <= distance; i++) {         //РАСЧИТЫВАЕМ ОТДЫХ ЕСЛИ ПУТЬ БОЛЬШЕ 4Х ЧАСОВ
//        if (i % (myAuto.middleSpeed * 4 +1 ) == 0){
//            relax++;
//        }
//    }
//    hour = Math.floor(distance / myAuto.middleSpeed) + (relax - 1);
//      //РАССЧИТЫВАЕМ ВРЕМЯ ЗА ПРОЙДЕННЫЙ ПУТЬ
//    minutes = Math.round(((distance / myAuto.middleSpeed) + (relax - 1) - hour) * 100) * 0.6;
//        //РАСЧИТЫВАЕМ МИНУТЫ ЧТОБЫ ОНИ НЕ БЫЛИ БОЛЬШЕ 60
//    console.log(`Дистанция ${distance} км. будет преодолена за ${hour} час. ${minutes} мин.`)
//}
//goDistance()

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

////ЗАДАНИЕ 2
////Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и
////следующие функции для работы с этим объектом.
////1. Функция сложения 2-х объектов-дробей.
////2. Функция вычитания 2-х объектов-дробей.
////3. Функция умножения 2-х объектов-дробей.
////4. Функция деления 2-х объектов-дробей.
////5. Функция сокращения объекта-дроби.

//"use strict";
//let fracFirst = {
//    numer: 3,
//    deno: 9
//}
//
//let fracSecond = {
//    numer: 6,
//    deno: 8
//}
//
//let fracThird = {       //СЮДА ЗАПИШЕМ ОТВЕТ
//    numer: 0,
//    deno: 0
//}
////СОЗДАЛИ ОБЪЕКТ
//
////1.СЛОЖЕНИЕ ДРОБЕЙ
//function addingFraction() {
//    console.log("Дробь №1: " + fracFirst.numer + "/" + fracFirst.deno);
//    console.log("Дробь №2: " + fracSecond.numer + "/" + fracSecond.deno);
//
//    let genDeno = 1;
//    while((genDeno % fracFirst.deno != 0 || genDeno % fracSecond.deno != 0)){
//    genDeno++;
//    }
//    //ИЩЕМ ОБЩИЙ ЗНАМЕНАТЕЛЬ
//
//    console.log("Общий знаменатель дробей: " + genDeno);
//
//    fracFirst.numer = fracFirst.numer * (genDeno / fracFirst.deno);
//    fracFirst.deno = genDeno;
//    //ЗАПИСЫВАЕМ ПЕРВУЮ ДРОБЬ ПРИВЕДЕННУЮ К ОБЩЕМУ ЗНАМЕНАТЕЛЮ
//
//    fracSecond.numer = fracSecond.numer * (genDeno / fracSecond.deno);
//    fracSecond.deno = genDeno;
//    //ЗАПИСЫВАЕМ ВТОРУЮ ДРОБЬ ПРИВЕДЕННУЮ К ОБЩЕМУ ЗНАМЕНАТЕЛЮ
//
//    fracThird.numer = fracFirst.numer + fracSecond.numer;
//    fracThird.deno = genDeno;
//    //СКЛАДЫВАЕМ 2 ДРОБИ В ТРЕТЬЮ
//
//    console.log("Сумма сложения дробей = " + fracThird.numer + "/" + fracThird.deno);
//    for (var i = fracThird.deno; i > 1; i--) {
//        if (fracThird.numer % i == 0 && fracThird.deno % i == 0) {
//            fracThird.numer = fracThird.numer / i;
//            fracThird.deno = fracThird.deno / i;
//        }
//    }
//    //ЕСЛИ ЧИСЛИТЕЛЬ И ЗНАМЕНАТЕЛЬ ДЕЛЯТСЯ НА ОДНО ЧИСЛО ДРОБЬ СОКРАЩАЕТСЯ
//
//    console.log("Упрощеная дробь = " + fracThird.numer + "/" + fracThird.deno);
//}
//addingFraction();
//
///////////////////////////////////////////////////////////////////////////////////////////
//
////2.ВЫЧИТАНИЕ ДРОБЕЙ
//function subtractionFraction() {
//    console.log("Дробь №1: " + fracFirst.numer + "/" + fracFirst.deno);
//    console.log("Дробь №2: " + fracSecond.numer + "/" + fracSecond.deno);
//
//    let genDeno = 1;
//    while((genDeno % fracFirst.deno != 0 || genDeno % fracSecond.deno != 0)){
//    genDeno++;
//    }
//    //ИЩЕМ ОБЩИЙ ЗНАМЕНАТЕЛЬ
//
//    console.log("Общий знаменатель дробей: " + genDeno);
//    fracFirst.numer = fracFirst.numer * (genDeno / fracFirst.deno);
//    fracFirst.deno = genDeno;
//    //ЗАПИСЫВАЕМ ПЕРВУЮ ДРОБЬ ПРИВЕДЕННУЮ К ОБЩЕМУ ЗНАМЕНАТЕЛЮ
//
//    fracSecond.numer = fracSecond.numer * (genDeno / fracSecond.deno);
//    fracSecond.deno = genDeno;
//    //ЗАПИСЫВАЕМ ВТОРУЮ ДРОБЬ ПРИВЕДЕННУЮ К ОБЩЕМУ ЗНАМЕНАТЕЛЮ
//
//    fracThird.numer = fracFirst.numer - fracSecond.numer;
//    fracThird.deno = genDeno;
//     //ВЫЧИТАЕМ 2 ДРОБИ В ТРЕТЬЮ
//    console.log("Сумма вычитания дробей = " + fracThird.numer + "/" + fracThird.deno);
//    for (var i = fracThird.deno; i > 1; i--) {
//        if (fracThird.numer % i == 0 && fracThird.deno % i == 0) {
//            fracThird.numer = fracThird.numer / i;
//            fracThird.deno = fracThird.deno / i;
//        }
//    }
//    //ЕСЛИ ЧИСЛИТЕЛЬ И ЗНАМЕНАТЕЛЬ ДЕЛЯТСЯ НА ОДНО ЧИСЛО ДРОБЬ СОКРАЩАЕТСЯ
//
//    console.log("Упрощеная дробь = " + fracThird.numer + "/" + fracThird.deno);
//}
//subtractionFraction();
//
/////////////////////////////////////////////////////////////////////////////////////////
//
////3.УМНОЖЕНИЕ ДРОБЕЙ
//function multiplicationFraction() {
//    console.log("Дробь №1: " + fracFirst.numer + "/" + fracFirst.deno);
//    console.log("Дробь №2: " + fracSecond.numer + "/" + fracSecond.deno);
//
//    fracThird.numer = fracFirst.numer * fracSecond.numer;
//    fracThird.deno = fracFirst.deno * fracSecond.deno;
//    //ЗАПИСЫВАЕМ УМНОЖЕНИЕ 2Х ДРОБЕЙ В ТРЕТЬЮ
//
//    console.log("Сумма умножения дробей = " + fracThird.numer + "/" + fracThird.deno);
//
//    for (var i = fracThird.deno; i > 1; i--) {
//        if (fracThird.numer % i == 0 && fracThird.deno % i == 0) {
//            fracThird.numer = fracThird.numer / i;
//            fracThird.deno = fracThird.deno / i;
//        }
//    }
//    //ЕСЛИ ЧИСЛИТЕЛЬ И ЗНАМЕНАТЕЛЬ ДЕЛЯТСЯ НА ОДНО ЧИСЛО ДРОБЬ СОКРАЩАЕТСЯ
//
//    console.log("Упрощеная дробь = " + fracThird.numer + "/" + fracThird.deno);
//}
//multiplicationFraction();
//
/////////////////////////////////////////////////////////////////////////////////////////
//
////4.ДЕЛЕНИЕ ДРОБЕЙ
//function divisionFraction() {
//    console.log("Дробь №1: " + fracFirst.numer + "/" + fracFirst.deno);
//    console.log("Дробь №2: " + fracSecond.numer + "/" + fracSecond.deno);
//
//    fracThird.numer = fracFirst.numer * fracSecond.deno;
//    fracThird.deno = fracFirst.deno * fracSecond.numer;         //ПЕРЕВОРАЧИВАЕМ ВТОРУЮ ДРОБЬ
//    //УМНОЖАЕМ ПЕРВУЮ НА ВТОРУЮ(ПРАВИЛА ДЕЛЕНИЯ ДРОБЕЙ)
//
//    console.log("Сумма деления дробей = " + fracThird.numer + "/" + fracThird.deno);
//
//    for (var i = fracThird.deno; i > 1; i--) {
//        if (fracThird.numer % i == 0 && fracThird.deno % i == 0) {
//            fracThird.numer = fracThird.numer / i;
//            fracThird.deno = fracThird.deno / i;
//        }
//    }
//    //ЕСЛИ ЧИСЛИТЕЛЬ И ЗНАМЕНАТЕЛЬ ДЕЛЯТСЯ НА ОДНО ЧИСЛО ДРОБЬ СОКРАЩАЕТСЯ
//
//    console.log("Упрощеная дробь = " + fracThird.numer + "/" + fracThird.deno);
//}
//divisionFraction();
//
/////////////////////////////////////////////////////////////////////////////////////////
//
////5.СОКРАЩЕНИЕ ДРОБЕЙ
//function abbreviationFraction() {
//    console.log("Дробь №1: " + fracFirst.numer + "/" + fracFirst.deno);
//    console.log("Дробь №2: " + fracSecond.numer + "/" + fracSecond.deno);
//
//    for (var i = fracFirst.deno; i > 1; i--) {
//        if (fracFirst.numer % i == 0 && fracFirst.deno % i == 0) {
//            fracFirst.numer = fracFirst.numer / i;
//            fracFirst.deno = fracFirst.deno / i;
//        }
//    }
//    //ЕСЛИ ЧИСЛИТЕЛЬ И ЗНАМЕНАТЕЛЬ ДЕЛЯТСЯ НА ОДНО ЧИСЛО ДРОБЬ СОКРАЩАЕТСЯ
//
//    for (var i = fracSecond.deno; i > 1; i--) {
//        if (fracSecond.numer % i == 0 && fracSecond.deno % i == 0) {
//            fracSecond.numer = fracSecond.numer / i;
//            fracSecond.deno = fracSecond.deno / i;
//        }
//    }
//    //ЕСЛИ ЧИСЛИТЕЛЬ И ЗНАМЕНАТЕЛЬ ДЕЛЯТСЯ НА ОДНО ЧИСЛО ДРОБЬ СОКРАЩАЕТСЯ
//
//    console.log("Сокращенная дробь №1 = " + fracFirst.numer + "/" + fracFirst.deno);
//    console.log("Сокращенная дробь №2 = " + fracSecond.numer + "/" + fracSecond.deno);
//}
//abbreviationFraction();
//
///////////////////////////////////////////////////////////////////////////////////////////

////ЗАДАНИЕ 3
////Создать объект, описывающий время (часы, минуты, секунды), и следующие функции
////для работы с этим объектом.
////1. Функция вывода времени на экран.
////2. Функция изменения времени на переданное количество
////секунд.
////3. Функция изменения времени на переданное количество
////минут.
////4. Функция изменения времени на переданное количество часов.
////Учтите, что в последних 3-х функциях, при изменении одной части времени, может
////измениться и другая. Например: если ко времени «20:30:45» добавить 30 секунд,
////то должно получиться «20:31:15», а не «20:30:75».
//
//"use strict";
//let dataTime = {
//    hour: 1,
//    minutes: 20,
//    second: 45
//}
////СОЗДАЛИ ОБЪЕКТ

/////////////////////////////////////////////////////////////////////////////////////////////
//
////1.ФУНКЦИЯ ДЛЯ ВЫВОДА ВРЕМЕНИ
//function visionDataTime() {
//    if (dataTime.hour < 10 && typeof dataTime.hour === "number") {
//    dataTime.hour = "0" + dataTime.hour;
//    }
//    if (dataTime.minutes < 10 && typeof dataTime.minutes === "number") {
//        dataTime.minutes = "0" + dataTime.minutes;
//    }
//    if (dataTime.second < 10 && typeof dataTime.second === "number") {
//        dataTime.second = "0" + dataTime.second;
//    }
//    //ДОБАВЛЯЕМ НОЛЬ ПЕРЕД ЧИСЛОМ ЕСЛИ ОНО МЕНЬШЕ 10
//    //ТАК ЖЕ СРАВНИВАЕМ TYPEOF ЧТОБЫ С ПОСЛЕДУЮЩЕМ ВЫЗОВОМ ФУНКЦИИ НЕ ПРИБАВЛЯЛОСЬ БОЛЬШЕ ОДНОГО НУЛЯ
//    //ПЕРЕД ЧИСЛОМ МЕНЬШЕ 10
//    console.log(dataTime.hour + ":" + dataTime.minutes + ":" + dataTime.second);
//}
//visionDataTime();
//
///////////////////////////////////////////////////////////////////////////////////////////////
//
////2.ФУНКЦИЯ ДЛЯ ИЗМЕНЕНИЕ ВРЕМЕНИ НА ПЕРЕДАННОЕ КОЛЛИЧЕСТВО СЕКУНД
//function plusDataTimeSecond() {
//    let plusSecond = +prompt("На какое количество секунд вы хотите перевести время?");
//    for (let i = 0; i < plusSecond; i++) {          //ПРИБАВЛЯЕМ СЕКУНДЫ
//        dataTime.second ++;
//        if (dataTime.second == 59) {        //ЕСЛИ СЕКУНД БОЛЬШЕ 59 ПРИБАВЛЯЕТСЯ МИНУТА
//            dataTime.second = 0;            //СЕКУНДЫ ОБНУЛЯЕМ
//            dataTime.minutes++;
//        }
//        if (dataTime.minutes == 59) {       //ЕСЛИ МИНУТ БОЛЬШЕ 59 ПРИБАВЛЯЕТСЯ ЧАС
//            dataTime.minutes = 0;           //МИНУТЫ ОБНУЛЯЕМ
//            dataTime.hour++;
//        }
//    }
//    visionDataTime();
//    return console.log(" Вы перевели время на " + plusSecond + " сек.");
//}
//plusDataTimeSecond();
////почему появляется лишний undefiend когда функция вызывается больше 1 раза?
////а в первый раз не вызывается?
//
/////////////////////////////////////////////////////////////////////////////////////////////
//
////3.ФУНКЦИЯ ДЛЯ ИЗМЕНЕНИЕ ВРЕМЕНИ НА ПЕРЕДАННОЕ КОЛЛИЧЕСТВО ЧАСОВ
//function plusDataTimeMinutes() {
//    let plusMinutes = +prompt("На какое количество минут вы хотите перевести время?");
//    for (let i = 0; i < plusMinutes; i++) {
//        dataTime.minutes ++;
//        if (dataTime.minutes == 59) {       //ЕСЛИ МИНУТ БОЛЬШЕ 59 ПРИБАВЛЯЕТСЯ ЧАС
//            dataTime.minutes = 0;           //МИНУТЫ ОБНУЛЯЕМ
//            dataTime.hour++;
//        }
//    }
//    visionDataTime();
//    return console.log(" Вы перевели время на " + plusMinutes + " мин.");
//}
//plusDataTimeMinutes();
//////почему появляется лишний undefiend когда функция вызывается больше 1 раза?
////а в первый раз не вызывается?
//
/////////////////////////////////////////////////////////////////////////////////////////////
//
////4.ФУНКЦИЯ ДЛЯ ИЗМЕНЕНИЕ ВРЕМЕНИ НА ПЕРЕДАННОЕ КОЛЛИЧЕСТВО ЧАСОВ
//function plusDataTimeHours() {
//    let plusHours = +prompt("На какое количество минут вы хотите перевести время?");
//    for (let i = 0; i < plusHours; i++) {       //ПРИБАВЛЯЕМ ЧАС
//        dataTime.hour ++;
//    }
//    visionDataTime();
//    return console.log(" Вы перевели время на " + plusHours + " час.");
//}
//plusDataTimeHours();
//////почему появляется лишний undefiend когда функция вызывается больше 1 раза?
////а в первый раз не вызывается?








