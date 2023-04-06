let cookieObj = {};                                                 //объект для кукки файлов
let frm = document.forms[0]                                         //доступ к форме
let wrong = document.getElementsByClassName('wrong')                //надпись с ошибкой

//РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ ДЛЯ ПРОВЕРКИ ДАННЫХ
let nameReg = new RegExp(/^[a-zа-я]{2,20}$/i)
let dateReg =  /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)/
let phoneNumbReg = /^[-\s\(\)0-9]{10,20}$/
let skypeReg = /^[a-z0-9.-]{1,}$/i
let foolReg = /a/

//МАССИВ С REGEXP,ИМЕНЕМ,И ОБЯЗАТЕЛЬНЫМ ИЛИ НЕТ ВВОДОМ
let massReg = [[nameReg,"firstName","sure"],[dateReg,"date","sure"],
    [phoneNumbReg,"phone","notSure"], [nameReg,"lastName","sure"],
    [foolReg,"male","sure"],[skypeReg,"skype","notSure"]];

//ПРОВЕРКА ДАННЫХ В ПОЛЯХ ВВОДА
function checkForm (){
    for (let i = 0; i < massReg.length;i++){
        if(massReg[i][0].test(frm[i].value)){                   //проверка данных ввода
            wrong[i].style.visibility = 'hidden';
            addCookie(massReg[i][1],frm[i].value);              //добавление данных в кукки
        }
        else {
            wrong[i].style.visibility = 'visible';
            if(massReg[i][2] === 'sure') return false           //обязательный или не обязательный ввод поля
        }
    }
}

//ПРОВЕРКА КУККИ
function checkCookie(){
    let emailOut = document.getElementById('email')
    let cookie = document.cookie;
    let cookieMass = cookie.split('; ');
    let razdel
    for (let i = 0;i < cookieMass.length;i++){
        razdel = cookieMass[i].split('=');
        cookieObj[razdel[0]] = razdel[1];
    }
    emailOut.innerHTML = cookieObj.email;
}

//ФУНКЦИЯ ДОБАВЛЕНИЯ КУККИ(ВЫЗЫВАЕТСЯ ЕСЛИ ПРОВЕРКА ДАННЫХ УСПЕШНА)
function addCookie(register,data){
    let expDateAdd = new Date();
    expDateAdd.setMinutes(expDateAdd.getMinutes() + 60);
    expDateAdd = expDateAdd.toUTCString();
    document.cookie = `${register}=${data}; expires=${expDateAdd}`
}

//ВЫВОД ДАННЫХ В ПОЛЯ ЕСЛИ ОНИ УЖЕ ЕСТЬ В КУККИ
function checkData(){
    for (let i = 0;i < massReg.length; i++){
        if(massReg[i][1] in cookieObj){
            frm[i].value = cookieObj[`${massReg[i][1]}`]
        }
    }
}

//ОЧсИТКА КУККИ ПРИ ВЫХОЕ ИЗ СТРАНИЦЫ
function clearCookie(){
    let expDateClear = new Date();
    expDateClear = expDateClear.toUTCString();
    for (let i = 0;i < massReg.length; i++){
        if(massReg[i][1] in cookieObj){
            document.cookie = `${massReg[i][1]}=${cookieObj[massReg[i][1]]}; expires =${expDateClear}`
        }
    }
    document.cookie = `email=${cookieObj.email}; expires =${expDateClear}`
}