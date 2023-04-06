let owl = $('.owl-carousel');                           //карусель
let flag = false;                                       //для включения воспроизведения
let flagSize = false;                                   //для увеличения картинки
let item = 0                                                //для записи индекса настоящей фотографи

//ИНИЦИАЛИЗАЦИЯ КАРУСЕЛИ УСТАНОВКА ПАРАМЕТРОВ
$(document).ready(function(){
    owl.owlCarousel({
        items: 1,
        dotsContainer: '#placeCirc',
        animateIn: 'animate__flipInX',
        onTranslated: callback,
    });
});

//ЗАГРУЖАЕТ МЕДИА КНОПКИ И ВСЕ КАРТИНКИ
(function getImgMedia(){
    let idMass = ['firstImg','prevImg','playImg','nextImg','lastImg'];
    for(let i = 1;i < 6;i++){
        $('#media').append(`<img class="imgMedia" id="${idMass[i-1]}" src="imgMedia/${i}.png" alt="Вместо картинки${i}">`);
    }
    for(let i = 1;i < 15;i++){
        $('#nowImg').append(`<div class="item"><img src="imgMain/${i}.png" alt="${i}"></div>`);
    }
}());
let play = $('#playImg')                            //КНОПКА ПЛЕЙ
let fullImg = $('#nowImg').children();                  //количество фотографий

//ОБРАБОТЧИК МЕДИА КНОПОК
$('#media').click(function (e){
    if(e.target.id === 'prevImg') owl.trigger("prev.owl.carousel",[500])
    if(e.target.id === 'nextImg') owl.trigger("next.owl.carousel",[500])
    if(e.target.id === 'firstImg') owl.trigger("to.owl.carousel",[0])
    if(e.target.id === 'lastImg') owl.trigger("to.owl.carousel",[fullImg.length - 1])
})

//ОБРАБОТЧИК КНОПКИ ПЛЕЙ
play.click(function (){
    flag = !flag
    playToImg(play)
})

//ФУНКЦИЯ КНОПКИ PLAY
function playToImg(but){
    if(flag){
        but.attr('src','imgMedia/3.1.png')
        owl.trigger('play.owl.autoplay',[1000])
    } else {
        owl.trigger('stop.owl.autoplay')
        but.attr('src','imgMedia/3.png')
    }
}

//ОБРАБОТЧИК СОБЫТИЯ НА УВЕЛИЧЕНИЕ КАРТИНКИ
$('#imgSize').click(function (){
    flagSize = !flagSize
    if(flagSize){
        $('#circ').hide();
        $('body,#buttons,#gallery,.item img').addClass('active');
        owl.trigger('refresh.owl.carousel');
        playToImg(play)
    } else {
       $('#circ').show();
       $('body,#buttons,#gallery,.item img').removeClass('active');
       owl.trigger('refresh.owl.carousel');
       playToImg(play);
    }
})

//КОЛБЕК ФУНКЦИЯ (УСТАНАВЛИВАЕТСЯ В ПАРАМЕТР КАРУСЕЛИ)
function callback(e){
    item = e.item.index;
    //ПРОВЕРКА НА ПОСЛЕДНИЙ СЛАЙД
    if(item === fullImg.length - 1) {
        play.attr('src','imgMedia/3.png').addClass('disableClass');
        flag = false
        $('#nextImg,#lastImg,#playImg').css('opacity','0.33');
        owl.trigger('stop.owl.autoplay');
    } else {
        $('#nextImg,#lastImg,#playImg').css('opacity','1');
        play.removeClass('disableClass')
    }
    //ПРОВЕРКА НА ПЕРВЫЙ СЛАЙД
    if(item === 0) {
        $('#firstImg,#prevImg').css('opacity','0.33');
    } else {
        $('#firstImg,#prevImg').css('opacity','1');
    }
}
