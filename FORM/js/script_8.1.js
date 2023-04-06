let fullComments = document.getElementById('fullComments');     //див для вывода комментариев
let frm = document.forms[0];                                    //формы

//КЛАСС С ОСНОВНЫМИ ДАННЫМИ
class dataForComment{
    constructor(blockWithComm,blockWithForms) {
        this.blockWithComm = blockWithComm;                 //блок с комментариями
        this.blockWithForms = blockWithForms;               //блок с формами
        this.inputName = this.blockWithForms[0];            //форма ввода имени
        this.inputComm = this.blockWithForms[1];            //форма ввода комментария
        this.createNewComment = document.createElement('div');      //создание комментария
    }
}


//КЛАСС ВЫВОДИТ ДАННЫЕ  О КОММЕНТАРИИ
class AppendPlaceForComm extends  dataForComment {
    //МЕТОД ДЛЯ СОЗДАНИЯ МЕСТА ДЛЯ КОММЕНТАРИЯ
    divForComm() {
        this.createNewComment.className = 'divForCom';
        this.blockWithComm.appendChild(this.createNewComment);
    }

    //МЕТОД ДЛЯ ВЫВОДА ИМЕНИ(ЮЗЕРА) В ШАПКУ КОММЕНТАРИЯ
    createUserName() {
        let userName = document.createElement('p');
        userName.className = 'headLeft';
        userName.innerHTML = this.inputName.value
        this.createNewComment.appendChild(userName);
    }

    //МЕТОД ПРЕОБРАЗУЕТ ВРЕМЯ В СТРОКУ(НУЖНЫЙ ФОРМАТ)
    formatDate(date, place) {
        place.innerHTML = date.toLocaleString().slice(12) +
            " " + date.toLocaleString().slice(0, 10);
    }

    //МЕТОД ДЛЯ ВЫВОДА ДАТЫ В ШАПКУ КОММЕНТАРИЯ
    createUserData() {
        let dateComment = new Date();
        let userDate = document.createElement('p');
        userDate.className = 'headRight';
        this.createNewComment.appendChild(userDate);
        this.formatDate(dateComment, userDate);           //функция для обработки даты(она в начале кода)
    }

}

//КЛАСС ОТВЕЧАЮЩИЙ ЗА ОБРАБОТКУ КОММЕНТАРИЯ
class createAndClear extends AppendPlaceForComm{
    //МЕТОД ДЛЯ СОЗДАНИЯ ЛИНИИ
    createHr(){
        let hrComment = document.createElement('hr');
        this.createNewComment.appendChild(hrComment);
    }

    //МЕТОД ДЛЯ ВЫВОДА ТЕКСТА КОММЕНТАРИЯ
    createCommText(){
        let commentText = document.createElement('p');
        commentText.className = 'text';
        commentText.innerHTML = this.inputComm.value;
        this.createNewComment.appendChild(commentText);
    }

    //ОЧИСТКА ФОРМ
    clearForm(){
        this.inputName.value = '';               //очистили формы
        this.inputComm.value = '';
    }
}

//УСТАНАВЛИВАЕТ ВРЕМЯ ДЛЯ СТАТЬИ
let dateArticleId = document.getElementById('dateCom')
let dateAr = new Date("2022-12-07T16:06:22");
let articleDate = new AppendPlaceForComm(fullComments,frm)
articleDate.formatDate(dateAr,dateArticleId);

//ОБРАБОТЧИК СОБЫТИЯ ПРИ ОТПРАВЛЕНИИ
let send = document.getElementById('send')
send.addEventListener('click',function (){
    if (frm[0].value.length > 1 && frm[0].value.length > 2){    //проверка на длинну символов
        let newCommentary = new createAndClear(fullComments,frm)
        newCommentary.divForComm();
        newCommentary.createUserName();
        newCommentary.createUserData();
        newCommentary.createHr();
        newCommentary.createCommText();
        newCommentary.clearForm();
    }
})