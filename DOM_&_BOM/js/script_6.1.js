let slider = document.querySelectorAll("#d1,#d2");
let work = false;
function sliderStart() {
    slider[1].addEventListener("mousedown", function () {
        work = true;            //ползунок можно двигать
    })
}

function sliderActive() {
    slider[0].addEventListener("mousemove", function (e) {
        if (work) {         //ограничения при движении ползунка
            slider[1].style.left = e.pageX - 155 + "px";
            if (e.pageX < 155) {
                slider[1].style.left = 0 + "px";
            }
            if (e.pageX > 640) {
                slider[1].style.left = 485 + "px";
            }
        }
    })
}

function sliderFinish() {
    slider[1].addEventListener("mouseup", function () {
        work = false;           //ползунок нельзя двигать
    })
}

sliderStart();
sliderActive();
sliderFinish();