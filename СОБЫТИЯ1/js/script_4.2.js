let matches = document.querySelectorAll("div");     //забираем все элементы div
for (let i = 0;i < matches.length;i++) {            //при наведении срабатывает событие
    matches[i].addEventListener("mouseover", function (e) {
        d4.style.background = window.getComputedStyle(matches[i]).background;   //передает нижнему квадрату вон наведенного
    })
    matches[i].addEventListener("mouseout", function (e) {
        d4.style.background = "gray";
    })
}