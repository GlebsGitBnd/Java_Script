let frm = document.forms[0];
let frmMonth = frm.month;
let frmYear = frm.year;
let tableTd = document.getElementsByTagName('td');

//1.БЕРЕТ ДАННЫЕ ИЗ INPUT И СОЗДАЕТ ДАТУ
class Calendar {
    constructor(yourMonth, yourYear) {
        this.yourMonth = yourMonth;                                 //Месяц
        this.yourYear = yourYear;                                   //Год
        this.yourDate = new Date(this.yourMonth, this.yourYear);    //Вся дата
    }
}

//2.ХРАНИТ ПЕРВЫЙ,ПОСЛЕДНИЙ ДЕНЬ И НОМЕР ДНЯ НЕДЕЛИ(ДАТЫ ИЗ РОДИТЕЛЬСКОГО КЛАССА)
class CalendarDigits extends Calendar {
    constructor(yourMonth, yourYear) {
        super(yourMonth, yourYear);
        this.firstDate = this.yourDate.getDate();                   //первый день месяцв
        this.lastDate = new Date(this.yourDate.getFullYear(),
            this.yourDate.getMonth() + 1, 0).getDate();             //последний деня месяца
        this.firstDateWeek = this.yourDate.getDay();                //день недели
    }
}

//3.ВЫВОДИТ СТРОКУ С МЕСЯЦЕМ И ГОДОМ НА СТРАНИЦУ
class PrintYearMonth extends CalendarDigits {
    //МЕТОД ДЛЯ ВЫВОДА ДАТЫ В СТРОКУ
    dayForPresent() {
        let chooseMonth = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November',
            'December'];
        printDate.innerHTML = chooseMonth[this.yourDate.getMonth()] +
            ', ' + this.yourDate.getFullYear();
    }
}

//4.ВЫВОДИТ ДНИ В КАЛЕНДАРЬ
class PrintFullCalendar extends  PrintYearMonth{
    constructor(yourMonth, yourYear, tableTd) {
        super(yourMonth, yourYear);
        this.tableTd = tableTd;                                 //принимает теги TD
    }
    //МЕТОД ВЫВОДИТ КАЛЕНДАРЬ
    outputCalendar() {
        if(this.firstDateWeek === 0) this.firstDateWeek = 7;    //перезаписываем воскресение
        let order = this.lastDate + this.firstDateWeek;         //порядок дней в календаре
        for (let i = this.firstDateWeek;i !== order; i++){      //вывод дней
            this.tableTd[i - 1].innerHTML = this.firstDate;
            this.firstDate++;
        }
    }

    //МЕТОД ОЧИЩАЕТ КАЛЕНДАРЬ
    clearCalendar() {
        for (let i = 0; i < this.tableTd.length; i++){
            this.tableTd[i].innerHTML = '';
        }
    }
}

//ОБРАБОТЧИК СОБЫРИЙ ПРИ НАЖАНИИ НА GENERATE
generateId.addEventListener("click", function (){
    if(frm.month.value.length > 0 && frm.year.value.length > 0) {

        //экземпляр класса
        let generateData = new PrintFullCalendar(frmYear.value, frmMonth.value - 1, tableTd);
        generateData.clearCalendar();           //очистка календаря
        generateData.dayForPresent();           //вывод строчной даты на страницу
        generateData.outputCalendar();          //заполнение календаря
    }
})