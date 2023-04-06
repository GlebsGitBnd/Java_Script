let fullSim = ['1234567890','ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'];
let useSim = '';                    //записывает из чего будет состоять строка
let finaleStr= '';                  //записывает сгенерированную строку

//ПРОВЕРЯЕТ ВКЛЮЧЕННЫЕ ЧЕКБОКСЫ
function checkTrue(){
    $('.checkB').each(function (index){
        if ($(this).prop('checked')){
            useSim += fullSim[index];
        }
    })
}

//ГЕНЕРИРУЕТ СТРОКУ
function generateStr(){
    for(let i = 0; i < $('#dig').val();i++){
        finaleStr += useSim[Math.round((useSim.length - 1) * Math.random())];
    }
    $('#res').val(finaleStr);
}

//ОБРАБОТЧИК
$('#generate').on('click',function (){
    checkTrue();
    generateStr();
    useSim = '';                    //очистка
    finaleStr= '';                  //очистка
})