//ОТМЕЧЕННЫЕ ПАРЫ
let pastLessons = [['1','1','JS BOM','present','present',''],
    ['2','1','JS Form','','present','present'],
    ['3','2','JS DOM','present','present','present']];

//КНОПКИ (ВЫБРАТЬ,ОТПРАВИТЬ)
let fullButt = document.getElementsByTagName('button');

//ОТОБРАЖЕНИЕ ПОЛНОГО ИНТЕРФЕЙСА И МЕСТО ДЛЯ ОТМЕТОК
let mark = document.getElementById('mark');
let present = document.getElementsByClassName('pres');

//ЧЕКБОКСЫ
let check = document.getElementsByClassName('rBn1');
let markCheck = document.getElementsByClassName('rB1');

//ТЕМА И МЕСТО ДЛЯ ВЫВОДА ТЕМЫ
let topic = document.getElementById('topic');
let topicOut = document.getElementById('topicOut');

//ПРОВЕРКА ЯВЛЯЕТСЯ ЛИ УРОК УЖЕ ОТМЕЧЕНЫМ
let flag = false;

//ФУНКЦИЯ ВЫВОДИТ ДАННЫЕ ОБ УЖЕ ОТМЕЧЕННОЙ ПАРЕ
function forPastLesson(){
    let select = document.getElementsByTagName('select')        //номер пары и номер группы
    for(let i = 0;i < pastLessons.length;i++){
        //ПОИСК СОВПАДЕНИЙ ПО МАССИВУ(НА ОТМЕЧЕННУЮ ПАРУ)
        if(select[0].value === pastLessons[i][0] && select[1].value === pastLessons[i][1]){
            topicOut.innerHTML = pastLessons[i][2];             //вывод темы
            for(let j = 0;j < present.length; j++)
                present[j].innerHTML = pastLessons[i][j + 3];   //вывод присутствующих
            flag = true;
        }
    }
}

//ЕСЛИ ПАРА НЕ ЯВЛЯЕТСЯ ОТМЕЧЕННОЙ МЕНЯЕТСЯ ИНТЕРФЕЙС
function forFutureLesson(){
    for (let i = 0; i < check.length; i++)
        check[i].style.visibility = 'visible'
    topic.style.visibility = 'visible';
}

//ОТМЕТКА СТУДЕНТОВ
function markStudents(){
    for(let i = 0;i < markCheck.length; i++){
        if (markCheck[i].checked) {
            present[i].style.visibility = 'visible';
            present[i].innerHTML = 'present'
        }
        check[i].style.visibility = 'hidden';
    }
    topic.style.marginBottom = '1.9%';
}

//ОЧИСТКА ФОРМ
function clearJournal(){
    for (let i = 0; i < present.length; i++) {
        check[i].style.visibility = 'hidden'
        markCheck[i].checked = false;
        present[i].innerHTML = '';
    }
    topicOut.innerHTML = '';
    topic.style.visibility = 'hidden'
    topic.value = '';
    flag = false;
}

//ОБРАБОТЧИК ДЛЯ КНОПКИ ВЫБРАТЬ(НОМЕР ГРУППЫ И УРОКА)
fullButt[0].addEventListener('click',function (){
    mark.style.visibility = 'visible';
    clearJournal()
    forPastLesson();
    if(!flag) forFutureLesson();

})

//ОБРАБОТЧИК ДЛЯ КНОПКИ СОХРАНИТЬ
fullButt[1].addEventListener('click',function (){
    if (topic.value.length > 0){
        topic.style.visibility = 'hidden';
        topicOut.innerHTML = ' ' + topic.value;
        markStudents();
    }
})