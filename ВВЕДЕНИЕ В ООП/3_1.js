// ////Задание 1
// ////Реализовать класс, описывающий простой маркер. В классе должны быть следующие
// ////компоненты:
// ////1)поле, которое хранит цвет маркера;
// ////2)поле, которое хранит количество чернил в маркере (в про-
// ////центах);
// ////3)метод для печати (метод принимает строку и выводит текст соответствующим
// ////цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный
// ////символ – это 0,5% чернил в маркере). Реализовать класс, описывающий
// ////заправляющийся маркер, унаследовав его от простого маркера и добавив метод для
// ////заправки маркера. Продемонстрировать работу написанных методов.
// //
// "use strict";
// class Marker {
//     constructor(color,ink) {            //принимает параметры
//         this.color = color;
//         this.ink = ink;
//     }
//     write(color,ink) {                 //метод выводит строку и уменьшает количество чернил
//         let yourString = prompt("Введите строку");
//         let tag = '';
//         for (let i = 1; i <= yourString.length; i++) {
//             if (this.ink == 0) break;       //останавливает цикл если закончились чернила
//             if (yourString[i] != " ") {      //не отбавляет чернила при пробеле
//                 this.ink = this.ink - 0.5;      //отбавляет чернила после каждого символа
//             }
//             tag += yourString.charAt(i - 1);    //отсчитывает и записывает в себя строку
//         }
//
//         document.write('<p style="color: ' + this.color + ';">' + tag + '</p>');
//         //выводит строку на страницу
//
//
//
//         console.log(`В маркере осталось ${this.ink} % чернил`);
//         //выводит остаток чернил в маркере
//
//         if (this.ink == 0) {
//             document.write('<p>Ваш маркер закончился</p>');
//         }
//         //выводит на станицу текст при отсутствии чернил
//
//     }
// }
//
// class UpdateMarker extends Marker {
//
//     update(color,ink) {
//         let upInc = +prompt("На сколько % вы хотите заправить маркер?");
//         this.ink += upInc;
//         console.log(`Маркер заправлен теперь в нем ${myMarker.ink} % чернил`);
//
//
//     }
// }
//
//
// let myMarker = new UpdateMarker("red", 3);    //переменная принимает значения 2 класса
//
// //console.log(`Цвет маркера: ${myMarker.color}`);
// //console.log(`Изначально в маркере ${myMarker.ink} % чернил`);
// ////выводит изначальные значения маркера
//
// myMarker.write()
// myMarker.update()
// myMarker.write()


/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//
//
//Задание 2
//Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и
//добавив следующие возможности:
//1)метод для вывода даты (числа и месяца) текстом;
//2)метод для проверки – это прошедшая дата или будущая
//(если прошедшая, то метод возвращает false; если будущая или текущая, то true);
//3) метод для проверки – високосный год или нет;
//4) метод, возвращающий следующую дату.
//Создайте объект класса ExtendedDate и выведите на экран результаты работы новых методов.

"use strict";

class ExtendedDate extends Date {
   constructor(date){
       super();
       this.date = new Date();
   }

   //МЕТОД ДЛЯ ВЫВОДА ДАТЫ ПРОПИСЬЮ(для даты в основном классе)
   dataText(){
       let unambiguousLowTen = ["Первое", "Второе", "Третье", "Четвертое",
       "Пятое", "Шестое", "Седьмое", "Восьмое", "Девятое", "Десятое"];
       //однозначные числа

       let unambiguousLowTwenty = ["Один", "Две", "Три", "Четыр", "Пят",
       "Шест", "Сем", "Восем", "Девят", "Десятое"];
       //начало числе ниже 20

       let unambiguousForDozen = ["Два", "Три"];
       //начало десяток

       let end_ofUnambiguous = ["надцатое", "дцать", "дцатое"];
       //окончание десяток

       let unambiguousMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая",
        "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
       //склонения месяцев

       switch (true) {
           case(this.date.getDate() <= 10):
               console.log(unambiguousLowTen[this.date.getDate() - 1] + " "
               + unambiguousMonth[this.date.getMonth()]);
               break;
           case(this.date.getDate() > 10 && this.date.getDate() < 20):
               console.log(unambiguousLowTwenty[this.date.getDate() % 10 - 1]
               + end_ofUnambiguous[0] + " " + unambiguousMonth[this.date.getMonth()]);
               break;
           case(this.date.getDate() > 20 && this.date.getDate() < 30):
               console.log(unambiguousForDozen[0] + end_ofUnambiguous[1] + " "
               +  unambiguousLowTen[this.date.getDate() % 10 - 1] + " "
               + unambiguousMonth[this.date.getMonth()]);
               break;
           case(this.date.getDate() > 30):
               console.log(unambiguousForDozen[1] + end_ofUnambiguous[1] + " "
               + unambiguousLowTen[0] + " " + unambiguousMonth[this.date.getMonth()]);
               break;
           case(this.date.getDate() == 30 || this.date.getDate() == 20):
               console.log(unambiguousForDozen[this.date.getDate() / 10 - 2]
               + end_ofUnambiguous[2] + " " + unambiguousMonth[this.date.getMonth()])
               break;
       }
   }

   //МЕТОД ДЛЯ ПРОВЕРКИ ДАТЫ
   pastAndFuture() {
       let putYorDate = new Date();    //дата для проверки будущего или прошедшего времени
       confirm("Введите дату для проверки")
       putYorDate.setDate(prompt("Введите день"));
       putYorDate.setMonth(prompt("Введите месяц") - 1);
       //убрали единицу чтобы отсчет месяцев был по русскому календарю
       putYorDate.setFullYear(prompt("Введите год"));
       if (putYorDate > this.date) {       //сравнили настоящую дату и проверочную
          console.log(true);
       } else {console.log(false)};
   }

   //МЕТОД ДЛЯ ПРОВЕРКИ ВИСОКОСНОГО ГОДА(Определяется для даты в основном классе)
   leapYear() {
       if (((this.date.getFullYear() % 400 == 0) || (this.date.getFullYear() % 4 == 0)) && (this.date.getFullYear() % 100 != 0)) {
       console.log("Этот год високосный.");
       } else {
           console.log("Этот год не високосный.");
       }   //с помощью оператора рассчитали и вывели значение
   }

   //МЕТОД ДЛЯ ПЕРЕВОДА ДАТЫ НА 1 ДЕНЬ(для даты в основном классе)
   nextDay() {
       this.date.setDate(this.date.getDate() + 1);
       console.log("Следующий день :" + this.date);
   }
}

let workWithDate = new ExtendedDate();
workWithDate.dataText();    //вызвали метод прописывающий день и месяц
workWithDate.leapYear();        //вызвали метод определяющий високосный год
workWithDate.nextDay();         //вызвали метод переводящий на день вперед
workWithDate.pastAndFuture();   //вызвали метод проверяющий дату на ввод









