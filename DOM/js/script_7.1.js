let divMain = document.getElementById('main');

//ФУНКЦИЯ СОЗДАЕТ БЛОКИ ПО НАЖАТИЮ
function addBlock(){
    b1.onclick = function () {
        let createDiv = document.createElement('div');      //создали див
        createDiv.className = 'divFool';                    //присвоили ему класс
        createDiv.style.background = 'rgb(' + Math.round(255 * Math.random()) +
            ',' + Math.round(255 * Math.random()) +
            ',' + Math.round(255 * Math.random()) + ')';        //назначили случайный цвет
        divMain.appendChild(createDiv);                      //добавили его в DOM
        chooseBlock();                           //срабатывает при нажатии на блок
    }
}

//ФУНКЦИЯ УДАЛЯЕТ ПО НАЖАТИЮ НА БЛОК
function chooseBlock(){
    divMain.onclick = function(e) {
        e.target.remove();
    }
}

addBlock();