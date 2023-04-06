let frm = document.forms[0];                                        //доступ к полям формы
let wrong = document.getElementsByClassName('wrong')                //надпись с ошибкой

let email = frm.email;                                              //поле email
let password = frm.password;                                        //поле пароль
let repPass = frm.repPass;                                          //поле повторение пароля

//РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ ДЛЯ ПРОВЕРКИ EMAIL И ПАРОЛЯ
let regEmail = /^[a-zA-Z_\.-]{3,}@[a-zA-Z\.]{2,30}\.[a-z]{2,}$/;
let regPassword = /((?=.*[1-9])(?=.*[a-z])(?=.*[A-Z]).{6,20})/;

//ПРОВЕРКА ПРИСУТСТВУЮТ ЛИ КУККИ
function checkCookie(){
    let cookie = document.cookie;
    let cookieMass = cookie.split('; ');
    let cookieObj = {};
    let razdel
    for (let i = 0;i < cookieMass.length;i++){
        razdel = cookieMass[i].split('=');
        cookieObj[razdel[0]] = razdel[1];
    }
    if ('email' in cookieObj) window.location="Korotky_DZ_ JS_Mod_9_2.html"
}

//ПРОВЕРКА ДАННЫХ
function testData(){
    if(regEmail.test(email.value)) wrong[0].style.visibility = 'hidden';
    else {
        wrong[0].style.visibility = 'visible';
        return false
    }

    if(regPassword.test(password.value)) wrong[1].style.visibility = 'hidden';
    else {
        wrong[1].style.visibility = 'visible';
        return false
    }

    if(password.value !== repPass.value) {
        wrong[2].style.visibility = 'visible';
        return false
    }
    else wrong[2].style.visibility = 'hidden';

    addCookie();
    checkCookie();

}

//ДОБАВЛЕНИЕ КУККИ ЕСЛИ ДАННЫЕ ВВЕДЕНЫ КОРРЕКТНО
function addCookie(){
    let expDate = new Date();
    expDate.setMinutes(expDate.getMinutes() + 60);
    expDate = expDate.toUTCString();
    document.cookie = `email=${email.value}; expires=${expDate}`
}