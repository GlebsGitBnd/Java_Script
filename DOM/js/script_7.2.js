let everyDiv = document.getElementsByTagName('div')

//УПРАВЛЯЕТ ЦВЕТОМ ПРИ НАЖАТИИ
function paletteStart() {
    for (let i = 0; i < everyDiv.length; i++) {
        everyDiv[i].style.background = everyDiv[i].dataset.color;   //установили фон всем блокам из data-color
        everyDiv[i].addEventListener('click', function (e) {
            main.style.color = everyDiv[i].getAttribute('data-color');  //установили тексту цвет блока
            e.stopPropagation();                        //отменили всплытие
        })
    }
}

paletteStart()