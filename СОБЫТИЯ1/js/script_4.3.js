main.addEventListener("mousedown", function(e){
    switch(true) {
        case (event.which == 1):
            d1.style.top = e.pageY + "px";          //получает координат У
            d1.style.left = e.pageX + "px";         //получает координат Х
            d1.style["z-index"] = 1;            //выводит на передний план
            d2.style["z-index"] = 0;
            d3.style["z-index"] = 0;
            break;
        case (event.which == 2):
            d2.style.top = e.pageY + "px";
            d2.style.left = e.pageX + "px";
            d2.style["z-index"] = 1;
            d1.style["z-index"] = 0;
            d3.style["z-index"] = 0;
            break;
        case (event.which == 3):
            d3.style.top = e.pageY + "px";
            d3.style.left = e.pageX + "px";
            d3.style["z-index"] = 1;
            d1.style["z-index"] = 0;
            d2.style["z-index"] = 0;
            break;
    }
    document.oncontextmenu = function() { return false };
})