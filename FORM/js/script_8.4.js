let buttSelect = document.getElementsByTagName('button');       //все кнопки
let bookName = document.getElementsByClassName('bookName')      //все названия книг
let frm = document.forms[0];                                    //все формы
let buttBuy = buttSelect[3];                                    //кнопка покупки
let countFrm = 0;                                   //счетчик для проверки заполнения форм

//ПРОВЕРКА НА ПОДЛИННУЮ ДАТУ(ДОСТАВИТЬ КНИГУ МОГУТ НЕ РАНЬШЕ 6 ДНЕЙ С НАСТОЯЩЕЙ ДАТЫ)
function verificationDate() {
    let overDay = new Date();
    overDay.setMonth(overDay.getMonth() + 6);
    overDay = (overDay.toISOString().slice(0, 10));

    let startDay = new Date();
    startDay.setDate(startDay.getDate() + 6);
    startDay = (startDay.toISOString().slice(0, 10));

    if (frm[4].value < startDay || frm[4].value > overDay) {
        frm[4].value = '';
        alert("На эту дату доставка не возможна!");
    }
}

//ВЫБИРАЕТ НУЖНУЮ КНИГУ
function chooseBook() {
    let bookPlace = frm[0];                         //форма для названия книги
    for (let i = 0; i < bookName.length; i++) {
        buttSelect[i].addEventListener('click', function () {
            bookPlace.value = bookName[i].textContent;
            if(frm[0].value.length > 0) frm[0].style.border = '1px solid gray';
        })
    }
}

//ВЫВОДИТ РЕЗУЛЬТАТ ЗАКАЗА
function result(){
    let headlineResult = document.getElementById('hRes');
    let result = document.getElementById('result')
    let res = document.getElementsByClassName('res');
    let dateDel = new Date(`${frm[4].value}`)
    res[0].innerHTML = frm[2].value;
    res[1].innerHTML = frm[0].value;
    res[2].innerHTML = dateDel.toLocaleString().slice(0, 10);
    res[3].innerHTML = frm[3].value;
    headlineResult.style.visibility = 'visible'
    result.style.visibility = 'visible'
}

//ОЧИЩАЕТ ВСЕ ФОРМЫ
function clearForm(){
    for(let i = 0; i < frm.length;i++){
        frm[i].value = '';
    }
}

//ЕСЛИ ПОЛЕ ПУСТОЕ,ПОДСВЕЧИВАЕТ КРАСНЫМ ПРИ ОТВОДЕ ФОКУСА
function onblurForm(){
    for(let i = 0; i < frm.length - 1;i++){
        frm[i].onblur = function () {
            if (frm[i].value.length === 0) {
                frm[i].style.border = '1px solid red';
            } else {frm[i].style.border = '1px solid gray';}
        }
    }
}

//ПРОВЕРЯЕТ ВСЕ ФОРМЫ ЗАПОЛНЕНЫ ИЛИ НЕТ(ДЛЯ РАЗРЕШЕНИЯ ПОКУПКИ)
function checkFullForm(){
    for (let i = 0; i < frm.length - 1;i++){
        if(frm[i].value.length > 0) {
            frm[i].style.border = '1px solid gray';
            countFrm++;
        }
        else {frm[i].style.border = '1px solid red'}   //Обводит красным незаполненную форму
    }
}

//ОБРАБОТЧИК СОБЫТИЯ ПРИ НАЖАТИИ НА КУПИТЬ
buttBuy.addEventListener('click',function (e){
    verificationDate();
    checkFullForm();
    if(countFrm === frm.length - 1) {              //дает разрешение на вывод результата
        result();                                       //если все формы были заполнены
        clearForm();
    }
    countFrm = 0;                                   //обнуляем счетчик
})
chooseBook();
onblurForm();