let imgMainFull = 15;                               //количество картинок
let currentImg = 1;                                 //картинка на которой мы находимся
let pastImg = 0;                                    //картинка на которой мы были шаг назад
let flagPlay = false                                    //включает/выключает воспроизведение
let flagSize = false                                    //открывает/закрывает картинку на весь экран
let indicate = $('#forCirc');                       //индикаторы(пагинация)
let massImg = [];

//ВЫВОДИТ МЕДИА ЭЛЕМЕНТЫ И ПЕРВУЮ КАРТИНКУ
(function getImgMedia(){
    let idMass = ['firstImg','prevImg','playImg','nextImg','lastImg'];
    for(let i = 1;i < 6;i++){
        $('#media').append(`<img class="imgMedia" id="${idMass[i-1]}" src="imgMedia/${i}.png" alt="Вместо картинки${i}">`);
    }
    for(let i = 0; i < imgMainFull;i++){
         $('#nowImg').append(`<img class="imgMain" src="imgMain/${i + 1}.png" alt="вместо картинки${i}">`);
    }
    $('.imgMain').eq(0).css('display','initial');
}());

function loadImage(){
    massImg = [];
    let start = currentImg - 6;
    let finish = currentImg + 7;
    if(currentImg % 8 === 0){
        for (let i = start;i < finish;i++){
            massImg.push(i)
        }
        console.log(massImg)
    }
}
//ВЫВОДИТ ИНДИКАТОРЫ(ПАГИНАЦИЮ)
function installPagination() {
    for (let i = 1; i < imgMainFull + 1; i++) {
        indicate.append(`<img class="circ" src="imgMedia/6.1.png" alt="вместо картинки${i}" title="${i}">`);
        if ($('.circ').eq(i-1).attr('title') === String(currentImg)) {
            $('.circ').eq(i-1).attr('src','imgMedia/6.png');
        }
    }
    mediaBlock(1,$(`#firstImg,#prevImg`))
    mediaBlock(imgMainFull,$(`#lastImg,#nextImg`))
    viewPagination();
    pastImg = currentImg;
    usePagination();
    loadImage()
}

//ЛОГИКА ДЛЯ ПАГИНАЦИИ
function viewPagination(){
    let int
    if (imgMainFull > 7) {                                  //ЕСЛИ ОБЩАЯ СУММА ФОТОГРАФИЙ БОЛЬШЕ 7
        if (currentImg < 5){                                //ЕСЛИ ВОЗВРАЩАЕМСЯ НА ПЕРВЫЕ 4
            int = 0;
            indicate.animate({
                left: `0`
            });
        }

        if(currentImg > 4 && pastImg > currentImg){         //ЕСЛИ ДВИГАЕМСЯ НАЗАД
            int = pastImg - currentImg
        }
        if (currentImg > 4 && pastImg < currentImg) {       //ЕСЛИ ДВИГАЕМСЯ ВПЕРЕД
            if(currentImg - pastImg > 3){                   //ЕСЛИ ПЕРЕКЛЮЧАЕМСЯ МЕЖДУ ДАЛЬНИМИ
                int = -(currentImg - pastImg - 3);
            }
            else {                                          //ЕСЛИ ПЕРЕКЛЮЧАЕМСЯ МЕЖДУ БЛИЖНИМИ
                int = -(currentImg - pastImg)
            }
        }
        indicate.animate({
                left: `+=${int * 21}px`
            });
    }
}

//АНИМАЦИЯ ВЫВОДА КАРТИНОК
function imgVisible(){
    indicate.empty();
    installPagination();
    $('.imgMain').fadeOut(300)
    setTimeout(function (){
        $('.imgMain').eq(currentImg - 1).fadeIn(300)
    },300)
}

//БЛОКИРУЕТ МЕДИАКНОПКИ ПО ДОСТИЖЕНИЮ НАЧАЛА/КОНЦА (ПРИМЕНЯЕТСЯ В ФУНКЦИИ КОТОРАЯ ВЫВОДИТ ПАГИНАЦИЮ)
function mediaBlock(num,id){
    if(currentImg === num){
        id.css('opacity','0.33').addClass('disableClass');
    }else {
        id.css('opacity','1').removeClass('disableClass');
    }
}

//АВТОМАТИЧЕСКОЕ ВОСПРОИЗВЕДЕНИЕ КАРТИНОК
function interval(){
    if (currentImg !== imgMainFull && flagPlay){
        currentImg++
        imgVisible()
        setTimeout(interval,1000)
    }else {
        $('#playImg').attr('src','imgMedia/3.png');
        flagPlay = false
    }
}

                //ОБРАБОТЧИКИ СОБЫТИЯ
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

//ОБРАБОТЧИК СОБЫТИЯ ДЛЯ ПАГИНАЦИИ
function usePagination(){
    $('.circ').on('click', function (e) {
        currentImg = Number(e.target.title);
        imgVisible()
    })
}

//ОБРАБОТЧИКИ СОБЫТИЯ ДЛЯ КНОПОК НАВИГАЦИИ И УВЕЛИЧЕНИЯ КАРТИНОК
function useNavigation(){
    //ОБРАБОТЧИКИ КНОПОК ВПЕРЕД/НАЗАД/ПЕРВАЯ/ПОСЛЕДНЯЯ
    $('#firstImg,#prevImg,#nextImg,#lastImg').on('click', function() {
        if($(this).attr('id') === `firstImg`)currentImg = 1
        if($(this).attr('id') === `prevImg`)currentImg--
        if($(this).attr('id') === `nextImg`)currentImg++
        if($(this).attr('id') === `lastImg`)currentImg = imgMainFull
        imgVisible()
    })
    //ОБРАБОТЧИК КНОПКИ PLAY
    $('#playImg').on('click', function() {
        flagPlay = !flagPlay
        if(flagPlay){
            $(this).attr('src','imgMedia/3.1.png');
            interval();
        }else{
           $(this).attr('src','imgMedia/3.png');
        }
    })
    //ОБРАБОТЧИК УВЕЛИЧЕНИЯ КАРТИНОК
    $('#imgSize').on('click', function (){
        flagSize = !flagSize;
        if(flagSize){
            $('body').attr('id','body')
            $('#buttons').attr('id','buttonsToPlay')
            $('#gallery').attr('id','view')
            $('#circ').hide()
        }else {
            $('body').removeAttr('id','body')
            $('#buttonsToPlay').attr('id','buttons')
            $('#view').attr('id','gallery')
            $('#circ').show()
        }
    })
}
installPagination();
useNavigation();