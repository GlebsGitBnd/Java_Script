let commentBlock = document.getElementById('commBlock')

let frm = document.forms[0];            //записали формы
let nameField = frm.yourName;           //записали формму с вводом имени
let commField = frm.yourComm;           //записали форму с вводом комментария

let dateNow = new Date();               //записали дтекущую дату
let dd = dateNow.getDate();             //получили текущий день
let mm = dateNow.getMonth() + 1;        //получили текущий месяц
let yy = dateNow.getFullYear();         //получили текущий год

//ФУНКЦИЯ ДЛЯ ВЫВОДА ИМЕНИ
function buttonClick() {
    if (nameField.value.length > 1 && commField.value.length > 2){
        let createName = document.createElement('p');
        createName.innerHTML = `<b>${nameField.value}</b>`;
        createName.id = 'commName';
        commentBlock.appendChild(createName);
    }
}

//ФУНКЦИЯ ДЛЯ ВЫВОДА ДАТЫ
function commentDate(){
    let createDate = document.createElement('p');
    createDate.innerHTML = `${dd}.${mm}.${yy}`;
    createDate.id = 'commDate';
    commentBlock.appendChild(createDate);
}

//ФУНКЦИЯ ДЛЯ ВЫВОДА КОММЕНТАРИЯ
function commentText(){
    let createComm = document.createElement('p');
    createComm.innerHTML = `${commField.value}`;
    createComm.id = 'commText';
    commentBlock.appendChild(createComm);
}

//ФУНКЦИЯ ДЛЯ ВЫВОДА HR
function commentHr(){
    let createHr = document.createElement('hr');
    commentBlock.appendChild(createHr);
}

//ОБРАБОТЧИК СОБЫТИЯ
commSpend.addEventListener('click',function (){
    if (nameField.value.length > 1 && commField.value.length > 2) {     //проверили длинну символов
        buttonClick();
        commentDate();
        commentText();
        commentHr();
    }
    nameField.value = '';               //очистили формы
    commField.value = '';
})