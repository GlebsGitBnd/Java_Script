//РАЗВОРАЧИВАЕТ 3,4 БЛОКИ НА ВСЮ СТРАНИЦУ И СВОРАЧИВАЕТ
let flag = true;
$('#swapLeft').click(function (){
    $(this).html(flag? '&#9658;': '&#9668');
    $(`#col1`).css("width", flag? "0": "30%");
    $(`#col2`).css("width",flag? "100%" : "70%");
    flag = !flag;
})

let click = false;
let hrLine = $('.hr');
let body = $('body');
let clickM0ment
//DRAG AND DROP ПРИ НАЖАТИИ НА ПОЛЗУНКИ
hrLine.on('mousedown',function (){
    clickM0ment = $(this).parent();
    click = true;
})
body.on('mouseup',function (){
    click = false;
})
body.on('mousemove',function (e){
    let screen = $(window).innerHeight() / 100;
    let maxHeight = screen * 100 - 100;
    if (click){
        screen = $(window).innerHeight() / 100;
        clickM0ment.parent().prev().css({'height': e.pageY / screen + "vh",'max-height': maxHeight / screen + 'vh'});
        clickM0ment.parent().css('height',100 - e.pageY / screen + "vh");
    }
})