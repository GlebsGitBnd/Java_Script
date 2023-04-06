////ЗАДАНИЕ 1. Написать функцию, которая принимает строку и выводит
////статистику о ней: количество букв, количество цифр и
////количество других знаков.
//
//"use strict";
//
//function analyticsString() {
//    let yourString = prompt("Введите строку.");
//    let mark = '';      //сюда будут записываться буквы из строки
//    let digit = 0;      //счетчик чисел
//    let letter = 0;     //счетчик букв
//    let symbol = 0;     //счетчик символов
//    for (let i = 0; i < yourString.length; i++) {       //перебираем строку
//        mark = yourString.charAt(i);                    //записываем каждый символ строки для проверки
//        switch (true) {
//            case (!isNaN(mark)):        //проверяем является ли символ строки цифрой
//                digit++;
//                break;
//            case (/^[a-zA-Zа-яА-Я]+$/.test(mark)):      //проверяем является ли символ
//                letter++;                               //символ строки буквой из алфавита
//                break;
//            default:                            //если символ строки не опознан в алфавите
//                symbol++;                       //он переходит в символы
//        }
//
//    }
//    console.log("В строке количество чисел = " + digit);
//    console.log("В строке количество букв = " + letter);
//    console.log("В строке количество символов = " + symbol);
//}
//analyticsString();
////Не знаю насколько правильное решение,это все в чем я смог разобраться

//
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


////ЗАДАНИЕ 2. Написать функцию, которая принимает двузначное число и возвращает его в текстовом виде.
////Например: 35 – тридцать пять, 89 – восемьдесят девять, 12 – двенадцать.
//
//"use strict";
//function writeNumber() {
//    let yourNumber = prompt("Введите число");
//    let dozens = Math.floor(+yourNumber / 10);                  //десятки
//    let units = yourNumber % 10;                                //единицы
//    let countNumber = "";                          //записывает в себя число прописью
//    let unambiguous = ["Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять", "Десять"];
//    //однозначные числа
//
//    let unambiguousLowTwenty = ["Один", "Две", "Три", "Четыр", "Пят", "Шест", "Сем", "Восем", "Девят", "Десять"];
//    //окончание числе ниже 20
//
//    let end_ofUnambiguous = ["надцать", "дцать", "десят"];
//    //окончание десяток
//
//    if (dozens == 1 && units < 10) {        //числа от 10 до 19
//        switch (true) {
//            case (units > 0):
//                countNumber += unambiguousLowTwenty[units - 1] + end_ofUnambiguous[0];
//                break;
//            case (dozens == 1 && units == 0):
//                countNumber += unambiguousLowTwenty[9];
//                break;
//        }
//    }
//
//    if (dozens > 1) {               //числа от 20 и выше
//        for (let i in unambiguous) {
//            switch (true) {
//                case (dozens == i && i == 4):
//                    countNumber += "Сорок";
//                    break;
//                case (dozens == i && i == 9):
//                    countNumber += "Девяносто";
//                    break;
//                case (dozens == i && i >= 5 && i <=8):
//                    countNumber += unambiguous[i - 1] + end_ofUnambiguous[2];
//                    break;
//                case (dozens == i && i > 1 && i < 4):
//                    countNumber += unambiguous[i - 1] + end_ofUnambiguous[1];
//                    break;
//            }
//        }
//        for (let i in unambiguous) {        //присоединяет единичные к десяткам
//            switch (true) {
//                    case (units == i && units > 0):
//                        countNumber += " " + unambiguous[i - 1];
//                        break;
//                }
//        }
//    }
//    console.log(countNumber);
//}
//writeNumber();


/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//
//
////ЗАДАНИЕ 3. Написать функцию, которая заменяет в полученной строке большие буквы на
////маленькие, маленькие – на большие, а цифры – на знак нижнего подчеркивания.
//
//"use strict";
//function LowerUpperLetter() {
//    let yourString = prompt("Введите строку");
//    let mark = "";
//    for (let i = 0; i < yourString.length; i++) {
//        switch (true) {
//            case (!isNaN(yourString.charAt(i))):
//                mark += "_";
//                break;
//                //проверяем является ли символ строки цифрой
//
//            case(yourString.charAt(i) === yourString.charAt(i).toUpperCase()):
//                mark += yourString.charAt(i).toLowerCase();
//                break;
//                //проверяем является ли буква большой
//
//            case(yourString.charAt(i) === yourString.charAt(i).toLowerCase()):
//                mark += yourString.charAt(i).toUpperCase();
//                break;
//                //проверяем является ли буква маленькой
//        }
//    }
//    console.log(mark);
//
//}
//LowerUpperLetter();

/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//
////4. Написать функцию, которая преобразует названия css стилей с дефисом в название
////в СamelСase стиле: font-size в fontSize, background-color в backgroundColor,
////textalign в textAlign.

//"use strict";
//function СamelСaseStyle() {
//    let yourString = prompt("Введите название CSS стиля");
//    let mark = "";
//    for (let i = 0;i <= yourString.length; i++) {   /
//        switch (true) {
//            case(yourString.charAt(i) == "-"):
//                i++;
//                mark += yourString.charAt(i).toUpperCase();
//                break;
//            default:
//                mark += yourString.charAt(i);
//                break
//        }
//      //дошли до тире пропустили её и следующее слово написали с большой буквы
//    }
//    console.log(mark);
//    console.log(yourString.length);
//}
//СamelСaseStyle();


/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//
////5. Написать функцию, которая принимает словосочетание и превращает его в
////аббревиатуру.Например: cascading style sheets в CSS, объектно ориентированное
////программирование в ООП.
//
//"use strict";
//function abbreviatura () {
//    let yourString = prompt("Введите словосочетание");
//    let mark = "";
//    if (yourString[0] != " ") {     //проверяем первый символ
//        mark += yourString[0].toUpperCase();}       //делаем его заглавной
//    for(let i = 0;i <= yourString.length;i++) {
//        if (yourString[i] == " " && yourString[i + 1] != " ") {
//               mark += yourString[i + 1].toUpperCase();
//               //смотрим нет ли впереди больше одного пробела
//        }
//    }
//    console.log(mark);
//}
//abbreviatura ();


/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//
//
//
////6. Написать функцию, которая принимает любое коли-
////чество строк, объединяет их в одну длинную строку и
////возвращает ее.
//
//"use strict";
//
//function mergeString () {
//    let question = confirm("Если хотите ввести строку нажмите: ОК");
//    let sum = "";
//        while(question == true) {
//            let yourString = prompt("Введите строку");
//            question = confirm("Если хотите ввести дополнительную строку нажмите: ОК");
//            sum += yourString;
//        }
//    alert(sum);
//}
//mergeString ();
//
//

/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//
//
//
////7. Написать функцию – калькулятор. Функция принимает строку с примером,
////определяет, какое действие необходимо выполнить (+ - * /), переводит операнды
////в числа, решает пример и возвращает результат.
//
//"use strict";
//
// function calculator() {
//    let digitFirst = 0;         //для записи первого числа
//    let digitSecond = 0;        //для записи второго числа
//    let operator = "";          //для записи оператора
//    let sum = "";               //записывает в себя операцию
//    let yourString = prompt("Введите операцию");
//    for (let i = 0; i < yourString.length; i++) {
//        if (isNaN(yourString[i]) === true) {    //проверяем элемент строки на число
//            digitFirst = yourString.substring(0,i);
//            digitFirst = Number(digitFirst);
//            //возвращаем подстроку первого числа и объявляем переменную числом
//
//            digitSecond = yourString.substring(i + 1);
//            digitSecond = Number(digitSecond);
//            //возвращаем подстроку второго числа и объявляем переменную числом
//
//            operator = yourString[i];       //записываем оператор
//        }
//
//        switch (true) {             //произвели все операции
//            case (operator == "+"):
//                sum = digitFirst + digitSecond;
//                break;
//            case (operator == "-"):
//                sum = digitFirst - digitSecond;
//                break;
//            case (operator == "/"):
//                sum = digitFirst / digitSecond;
//                break;
//            case (operator == "*"):
//                sum = digitFirst * digitSecond;
//                break;
//        }
//    }
//    console.log("Ответ: " + sum);       //вывели ответ
// }
// calculator();


/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////


////8. Написать функцию, которая получает url и выводит подробную информацию о нем.
////Например: url “https://itstep.org/ua/about”, информация “протокол: https, домен:
////itstep.org, путь: /ua/about”.
//
//"use strict";
//
//function urlInformation() {
//    let yourString = prompt("Введите url");
//    let protocol = "";              //для записи протокола
//    let domain = "";                //для записи домена
//    let patch = "";                 //для записи пути
//    console.log(yourString);
//    for (let i = 0; i < yourString.length; i++) {     //перебираем строку
//        if (yourString[i] == ":" && yourString[i + 1] == "/") {
//            protocol = yourString.substring(0,i);     //записываем подстроку
//            yourString = yourString.substring(i + 3);
//            //перезаписываем строку без протокола
//        }
//    }
//    for (let i = 0; i < yourString.length; i++) {     //перебираем обновленную строку
//        if(yourString[i] == "/" && yourString[i + 1] != "/") {
//            domain = yourString.substring(0,i);       //записываем подстроку
//            yourString = yourString.substring(i);
//            //перезаписываем строку без домена
//            break;
//        }
//    }
//    patch = yourString.substring(1)   //записываем оставшееся в путь
//    console.log("Протокол : " + protocol);
//    console.log("Домен : " + domain);
//    console.log("Путь : " + patch);
//}
//urlInformation();

/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

////9. Написать функцию, которая принимает строку и разделитель и возвращает массив
////подстрок, разбитых с помощью указанного разделителя.
////Например: строка “10/08/2020”, разделитель “/”, результат: “10”, “08”, “2020”.
////Выполняя задание, не используйте функцию split().
//
//"use strict";
//
//function separatorString () {
//    let yourString = prompt("Введите строку");
//    let yourSeparator = prompt("Введите разделитель");
//    let massString = [];            //для записи разделенных подстрок в массив
//
//    for (let i = 0; i < yourString.length + 1; i++) {
//        if (yourString[i] == yourSeparator) {               //ищем разделитель
//        massString[massString.length++] = yourString.substring(0,i);    //забираем подстроку до разделителя
//        //увеличиваем длинну массива на 1 и записываем подстроку
//
//        yourString = yourString.substring(i + 1);
//        i = 0;
//        //перезаписываем строку без подстроки которую мы определили
//        //обнуляем итерации для перезапуска цикла для новой строки
//        }
//    }
//    massString[massString.length++] = yourString.substring(0);
//    //записываем остаток строки
//    console.log(massString);
//}
//separatorString ();


/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

////10. Написать функцию вывода текста по заданному шаблону.
////Функция принимает первым параметром шаблон, в тексте которого может использоваться
////%, после символа % указывается индекс входного параметра. При выводе вместо
////%индекс необходимо вывести значение соответствующего входного параметра.
////Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10, 8, 2020) должна вывести
////“Today is Monday 10.8.2020”.
//
//"use strict";
//
//function templateString() {
//    let yourTemplate = ["Today is %1 %2.%3.%4", "Monday", 10, 8, 2020];
//    let yourString = "";            //записывает вывод шаблона
//    let numberMass = 0;             //записывает номер индекса массива
//    for(let i = 0;i < yourTemplate[0].length; i++) {
//        switch(true) {
//            case(yourTemplate[0][i] == "%"):
//                numberMass = yourTemplate[0][i + 1];        //записывает номер после %
//                yourString += yourTemplate[numberMass];     //записывает данные массива по индексу
//                i++;                            //перепрыгивает следующую итерацию
//                break;
//            case(yourTemplate[0][i] != "%"):
//                yourString += yourTemplate[0][i];      //записывает данные шаблона
//        }
//    }
//    console.log(yourString);
//}
//templateString();