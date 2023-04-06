let outPut = document.getElementById('output');
let errorType = document.getElementById('s2')
let frm = document.forms[0];

function formateData(e){
    e.preventDefault();                             //останавливает действие сабмит
    //ПРОВЕРКА НА ОШИБКУ В КОНСОЛИ
    try {
        errorType.style.visibility = 'hidden';
        let toObj = JSON.parse(frm[0].value);
        outPut.innerHTML = JSON.stringify(toObj, null, 4)
        console.log(JSON.stringify(toObj))
    }
    catch (e) {
        errorType.style.visibility = 'visible';
        outPut.innerHTML = '';
    }
}