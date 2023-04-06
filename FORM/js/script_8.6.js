//ФУНКЦИЯ ЗАГРУЗКИ ПОЕЗДА
function loadTrain(){
    let frmId = document.getElementById('frm');             //форма для чекбоксов
    let classCoupe = ["leftTop","leftBot","rightTop","rightBot"];       //стили для купе
    let coupeIn = `<label class="forCheckbox">
                        <input type="checkbox" class="rB1">
                        <span class="rBn1"></span>
                        <span class="pres"></span>
                   </label>`

    for (let i = 0;i < 7;i++) {
        let wagon = document.createElement('div');
        wagon.className = 'forSeats'
        frmId.appendChild(wagon);
        for (let j = 0; j < 4; j++) {
            let coupe = document.createElement('div');
            coupe.className = `${classCoupe[j]}`
            coupe.innerHTML = coupeIn
            wagon.appendChild(coupe)
        }
    }
    let pres = document.getElementsByClassName("pres");
    for (let i = 0;i < pres.length;i++){
        pres[i].innerHTML = `${i}`
    }
}

//ЗАГРУЖАЕМ ПОЕЗД
loadTrain();

let fullBut = document.getElementsByTagName('button');              //Кнопки
let dateBron = document.getElementById('dateBron');                 //Input date

let sectionFool = document.getElementsByClassName('section');      //Разделы(появляются при нажатии на кнопку)
let fullCheck = document.getElementsByClassName('rB1');             //Чекбоксы
let fullCheckStyle = document.getElementsByClassName('rBn1')        //Чекбокс спаны

let direction = document.getElementsByTagName('select')             //выбор маршрута поезда
let tbody = document.getElementById('tbody');                       //тело таблицы

let countSeats = 0;                                                 //счетчик для количеста купленных мест
let priseTicket = 0;
let takenSeat = [["Voronezh-Moscow","2022-12-26","19","10","14","27","1","8","17"],
["Moscow-St.Petersburg","2022-12-27","13","16","11","17","4","10","15"],
["Moscow-Sochi","2022-12-28","1","20","24","17","13","18","27"],
["Murmansk-Petersburg","2022-12-29","19","18","12","21","1","18","7"]];


//КЛАСС С ОБЩЕЙ ИНФОРМАЦИЕЙ
class InfoFull {
    constructor(dateBron, takenSeat, sectionFool, fullCheck,
                fullCheckStyle, direction, tbody,countSeats) {
        this.dateBron = dateBron;                               //дата из инпут
        this.takenSeat = takenSeat;                             //забронированные места
        this.sectionFool = sectionFool;                         //основные дивы
        this.fullCheck = fullCheck;                             //все чекбоксы
        this.fullCheckStyle = fullCheckStyle;                   //стили чекбоксов
        this.direction = direction;                             //данные из селекта(маршрут поезда)
        this.tbody = tbody;                                     //тело таблицы
        this.countSeats = countSeats;                           //счетчик выбранных мест
        this.yourSeat = [];                                     //забронированные места юзером
        this.yourSeatTb = [];                                   //для вывода забронированных мест в таблицу
    }
}

//1.МЕТОДЫ ДЛЯ ПЕРВОЙ СЕКЦИИ(ВЫБОР МАРШРУТА И ДАТЫ)
class SectionFirst extends InfoFull {
    clearSeatBron(){
        for (let i = 0;i < this.fullCheck.length;i++){
            this.fullCheck[i].disabled = false;
            this.fullCheckStyle[i].style.opacity = '1';
        }
    }
    //ОТОБРАЖАЕТ ЗАБРОНИРОВАННЫЕ МЕСТА(СМОТРЕТЬ ПО ДАТЕ ИЗ МАССИВА)
    seatBron() {
        for (let i = 0; i < this.takenSeat.length; i++) {
            if (this.direction[0].value === this.takenSeat[i][0] && this.dateBron.value === this.takenSeat[i][1]) {
                for (let j = 2; j < this.takenSeat[i].length; j++) {
                    this.fullCheckStyle[this.takenSeat[i][j] - 1].style.opacity = '0.33';
                    this.fullCheckStyle[this.takenSeat[i][j] - 1].style.backgroundImage = '';
                    this.fullCheck[this.takenSeat[i][j] - 1].disabled = true;
                }
            }
        }
    }

    //ПРОВЕРКА НА ДАТУ(НЕЛЬЗЯ ВЫБРАТЬ НИЖЕ ТЕКУЩЕЙ ДАТЫ ИЛИ БОЛЬШЕ ЧЕМ ПОЛ ГОДА)
    verificationDate() {
        let today = (new Date()).toISOString().slice(0, 10);
        let overDay = new Date();
        overDay.setMonth(overDay.getMonth() + 6);
        overDay = (overDay.toISOString().slice(0, 10));
        if (this.dateBron.value < today || this.dateBron.value > overDay) {
            this.dateBron.value = '';
            this.dateBron.style.borderColor = 'red';
            alert("На эту дату поезда нет")
        } else {
            this.dateBron.style.borderColor = ''
        }
    }

    nextMarsh(){
        for(let i = 0;i < this.fullCheck.length; i++){
            this.fullCheck[i].checked = false;
        }
    }

    //ОТКРЫВАЕТ ВТОРУЮ СЕКЦИЮ(С ВЫБОРОМ МЕСТ)
    openSectionSecond(){
        if (this.dateBron.value.length > 9) {
            this.sectionFool[1].style.display = 'block'
            this.sectionFool[0].style.display = 'block'
        }
        this.yourSeatTb = [];
        let priseOut = document.getElementById('priceOut')
        priseOut.innerHTML = "0$"
    }
}

//2.МЕТОД ДЛЯ ВТОРОЙ СЕКЦИИ(ПОКУПКА БИЛЕТОВ)
class SectionSecond extends SectionFirst{
    //ЗАПИСЫВАЕТ В МАССИВ МАРШРУТ,ДАТУ,МЕСТО
    yourSeatBron() {
        let strDate = new Date(this.dateBron.value);
        strDate = strDate.toLocaleString().slice(0, 10);
        this.yourSeat = [this.direction[0].value,this.dateBron.value]
        for (let i = 0; i < this.fullCheck.length; i++) {
            if (this.fullCheck[i].checked) {
                  this.yourSeatTb[this.yourSeatTb.length] = [this.direction[0].value, strDate, i]
                this.yourSeat.push(`${i + 1}`);
            }
        }
    }
}

//3.МЕТОДЫ ДЛЯ ТРЕТЬЕЙ СЕКСИИ(ВЫВОД КУПЛЕННЫХ БИЛЕТОВ)
class SectionThird extends SectionSecond{
    //ОТКРЫВАЕТ 3 СЕКЦИЮ ЕСЛИ КУПЛЕН ХОТЯ БЯ 1 БИЛЕТ
    buyTicket() {
         if (this.countSeats > 0) {
             this.sectionFool[2].style.visibility = 'visible';
             this.sectionFool[1].style.display = 'none'
             this.sectionFool[0].style.display = 'none'
         }
         if (this.countSeats < 1) {
             this.sectionFool[2].style.visibility = 'hidden';
         }
         this.takenSeat.push(this.yourSeat)
         this.seatBron();
     }

    //СОЗДАЕТ ТАБЛИЦУ С КУПЛЕННЫМИ БИЛЕТАМИ
    createTb() {
        console.log(this.tbody)
        console.log(this.countSeats)
        for (let i = 0; i < this.countSeats; i++) {
            let createTr = document.createElement('tr');
            this.tbody.appendChild(createTr);
            for (let j = 0; j < 3; j++) {
                let createTd = document.createElement('td');
                createTr.appendChild(createTd);
                createTd.innerHTML = this.yourSeatTb[i][j];
            }
        }
    }

    //УДАЛЯЕТ ПРЕДЫДУЩУЮ ТАБЛИЦУ ЕСЛИ РЕШИЛИ КУПИТЬ ДРУГИЕ БИЛЕТЫ
    removeTb() {
        while (this.tbody.firstChild) {
         this.tbody.removeChild(this.tbody.firstChild);
        }
        sectionFool[2].style.visibility = 'hidden'
    }
}

//ОБРАБОТЧИК СОБЫТИЯ ДЛЯ ИЗМЕНЕНИЯ ЦЕНЫ ПРИ УВЕЛИЧЕНИИ ВЫБРАННЫХ БИЛЕТОВ
function prise(){
    for(let i = 0;i < fullCheck.length;i++){
        fullCheck[i].addEventListener('click',function (){
            let priseOut = document.getElementById('priceOut')
            if(fullCheck[i].checked) {
                priseTicket += 62;
                countSeats++;
            }
            if(!fullCheck[i].checked) {
                priseTicket -= 62;
                countSeats--;
            }
            priseOut.innerHTML = priseTicket + '$';
        })
    }
}

//ОБРАБОТЧИК СОБЫТИЯ ДЛЯ ПЕРЕХОДА КО ВТОРОЙ СЕКЦИИ
fullBut[0].addEventListener('click',function (){
    let chooseTime = new SectionThird(dateBron,takenSeat, sectionFool, fullCheck,
            fullCheckStyle, direction, tbody,countSeats);
    chooseTime.removeTb();
    chooseTime.clearSeatBron();
    chooseTime.seatBron()
    chooseTime.verificationDate();
    chooseTime.nextMarsh();
    chooseTime.openSectionSecond();
    countSeats = 0;
    priseTicket = 0;
})

prise();

//ОБРАБОТЧИК СОБЫТИЯ ДЛЯ ПЕРЕХОДА К ТРЕТЬЕЙ СЕКЦИИ
fullBut[1].addEventListener('click',function (){
    let chooseSeats = new SectionThird(dateBron, takenSeat, sectionFool, fullCheck,
                fullCheckStyle, direction, tbody,countSeats);
    chooseSeats.removeTb();
    chooseSeats.yourSeatBron();
    chooseSeats.createTb();
    chooseSeats.buyTicket();
})