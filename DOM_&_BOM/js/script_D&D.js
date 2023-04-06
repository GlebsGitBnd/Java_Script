let div1 = document.getElementById("div1")
var isDrag = false;
var xCors = 0;
var yCors = 0;
console.log(xCors +"," + yCors);
div1.addEventListener("mousedown",function(e){
    isDrag = true
    xCors = e.pageX - getCoords(div1).left;
    yCors = e.pageY - getCoords(div1).top;
})
div1.addEventListener("mouseup",function(){
    isDrag = false;
    xCors = 0;
    yCors = 0;
})
document.addEventListener("mousemove",function(e){
    if(isDrag){
    div1.style.left = e.pageX - xCors + "px";
    div1.style.top  = e.pageY - yCors + "px";
    }
})
function getCoords(div1) { // кроме IE8-
    var box = div1.getBoundingClientRect();
    return {
    top: box.top + yCors,
    left: box.left + xCors
    };
}