let frm = document.forms[0];            //все формы
let textFool= frm.text;                 //форма textarea
let buttonSend = frm.bClick;            //форма кнопки
let placeForText = document.getElementById('d3');   //вывод результата
let styleText = [['fontWeight','bold'],['textDecoration','underline'],
    ['fontStyle','italic'],['textAlign','left'],
    ['textAlign','right'],['textAlign','center']]

//ОПРЕДЕЛЯЕТ КАКАЯ ФОРМА НАЖАТА И ВЫВОДИТ РЕЗУЛЬТАТ
function styleOn() {
    for(let i = 0;i < styleText.length;i++){
        if(frm[i].checked)
            placeForText.style[`${styleText[i][0]}`] = styleText[i][1];
        if(!frm[i].checked && i < 4)
            placeForText.style[`${styleText[i][0]}`] = '';
    }
}

//ОБРАБОТЧИК СОБЫТИЯ
buttonSend.addEventListener('click', function (){
    placeForText.innerHTML = textFool.value;
    styleOn();
})