let person = ['img/alh.jpg','img/axe.jpg','img/invoker.jpg',
            'img/jager.jpg','img/lina.jpg','img/sf.jpg',
            'img/shaman.jpg','img/teror.jpg','img/tidh.jpg']
let counters = 0;
center.src = person[counters];          //установили начальное значение для картинки
left.style.opacity = '.1';              //размыли левую стрелку при изначальном положении

function rightSwap() {
    right.addEventListener('click', function () {
        if (counters !== person.length - 1) {       //проверка на конец картинок
            counters++
            center.src = person[counters];
            left.style.opacity = '1';
        }
        if (counters === person.length - 1){            //если достигнут конец
            center.src = person[person.length - 1];
            right.style.opacity = '.1';
        }
    })
}

function leftSwap() {
    left.addEventListener('click', function () {
        if (counters !== 0) {                           //проверка на начало картинок
            counters--
            center.src = person[counters];
            right.style.opacity = '1';
        }
        if (counters === 0){                            //если достигнуто начало
            center.src = person[0];
            left.style.opacity = '.1';
        }
    })
}

rightSwap();
leftSwap();