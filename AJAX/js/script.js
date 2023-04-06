let frm = document.getElementById('frmFirst');                      //доступ к форме
let outWatch = document.getElementById('choose');                   //див для вывода фильмов
let list = document.getElementById('list');                         //немаркированный список для пагинации
let startList = document.getElementById('startList');               //предыдущая страница(пагинация)
let lastList = document.getElementById('lastList');                 //следующая страница(пагинация)

let urlLink = `http://www.omdbapi.com/?i=tt3896198&apikey=3926e7a0`;    //url с API
let fullFile;                                                 //список фильмов после ответа с запроса
let fullPage = [];                                            //для записи страниц при создании пагинации
let currentPage = 1;                                          //страница на которой мы находимся

//ФУНКЦИЯ С ЗАПРОСОМ
function toRequestSearch(e,method,url,page) {
    let request;
    let formData = new FormData(frm);
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.responseType = 'json'
    request.open(method, url +`&s=${formData.get('lookUp')}&type=${formData.get('typeWatch')}&page=${page}`);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            try{                                        //ПРОВЕРКА НА ОШИБКУ(ЕСЛИ ФИЛЬМЫ НЕ НАЙДЕНЫ)
                fullFile = request.response;
                console.log(fullFile)
                clearChoose();
                createWatch();
                createPagination();
            }
            catch (e){
                list.style.display = 'none';
                outWatch.innerHTML = `<p id="error">${formData.get('typeWatch')} not found!.</p>`;
            }
        }
    }
    request.send();
    e.preventDefault();
}

//СОЗДАЕТ ДИВЫ С ФИЛЬМАМИ
function createWatch(){
    for (let i = 0;i < fullFile.Search.length;i++){
        let place = document.createElement('div');
        place.className = 'place';
        outWatch.appendChild(place);
        place.innerHTML = ` <img src="${fullFile.Search[i].Poster}"
                                alt="Вместо картинки${i}">
                            <span class="type">${fullFile.Search[i].Type}</span><br>
                            <p class="title">${fullFile.Search[i].Title}</p>
                            <span class="year">${fullFile.Search[i].Year}</span>
                            <form onsubmit="detailsLook(event,${i})">
                                <label>
                                    <input class="details" type="submit" value="Details">
                                </label>
                            </form>`
    }
}

//СОЗДАЕТ ПАГИНАЦИЮ
function createPagination(){
    let pages = Math.ceil(fullFile.totalResults / 10);
    switch(pages > 10) {                                        //ЕСЛИ СТРАНИЦ БОЛЬШЕ 10
        case(currentPage > pages - 5):                          //если мы находимся на последних страницах
            console.log(pages - currentPage)
            for (let i = pages - 9; i <= pages; i++) {
                fullPage.push(i)
                if(i === pages) break
            }
            break
        case(currentPage > 5):                                  //если находимся с 5 по 10 страницу
            for (let i = currentPage-4; i <= currentPage+5; i++) {
                fullPage.push(i)
                if(i === pages) break
            }
            break
        default:
            for (let i = 1; i <= 10; i++) {                     //если находимся с 1 по 5 страницу
                fullPage.push(i)
                if(i === pages) break
            }
    }
    if(pages < 10) {                                             //ЕСЛИ СТРАНИЦ МЕНЬШЕ 10
        fullPage = [];
        for (let i = 1; i <= pages; i++) {
            fullPage.push(i)
        }
    }
    for (let i = 0;i < fullPage.length;i++){                    //ВЫВОДИТ ПАГИНАЦИЮ
        let pageLi = document.createElement('li');
        pageLi.className = 'page'
        list.insertBefore(pageLi, lastList);
        pageLi.innerHTML = fullPage[i]
        pageLi.style.background = '#fbf2ea'
        if(pageLi.innerText === String(currentPage)){
            pageLi.style.background = '#b8c7c7'
        }
    }
    list.style.display = 'flex'
    fullPage = [];
}

//ОЧИСТКА ДИВОВ С ФИЛЬМАМИ(ПРИ ПОИСКЕ НОВЫХ ФИЛЬМОВ ИЛИ ПЕРЕХОДЕ МЕЖДУ СТРАНИЦАМИ)
function clearChoose(){
    let page = document.getElementsByClassName('page')
    while (outWatch.firstChild){
        outWatch.removeChild(outWatch.firstChild)
    }
    while(page.length) {
        page[0].parentNode.removeChild(page[0]);
    }
}

//ОБРАБОТЧИК СОБЫТИЯ НА ПАГИНАЦИЮ
function usePagination() {
    //ПЕРЕХОД НА ЛЮБУЮ СТРАНИЦУ В ОБЛАСТИ ВИДИМОСТИ
    list.addEventListener('click',function (e){
        if(e.target.className === 'page'){
            console.log(e.target.innerText)
            let pageN = Number(e.target.innerText);
            currentPage = pageN
            toRequestSearch(event,'GET',
            urlLink,pageN)
        }
    })
    //ПЕРЕХОД НА СЛЕДУЮЩУЮ СТРАНИЦУ
    lastList.addEventListener('click',function (){
        let pages = Math.ceil(fullFile.totalResults / 10);
        if(currentPage < pages)
        currentPage++
        toRequestSearch(event,'GET',
        urlLink,currentPage)
    })
    //ПЕРЕХОД НА ПРЕДЫДУЩУЮ СТРАНИЦУ
    startList.addEventListener('click',function (){
        if(currentPage > 1){
           currentPage--
        toRequestSearch(event,'GET',
        urlLink,currentPage)
        }
    })
}
usePagination();

                //DETAILS BLOCK
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
let infoFilm;                                           //содержит информацию о фильми при ответе на запрос
let infoBlock = document.getElementById('infoOut');     //блок с выводом информации о фильмах

//ВСЕ ОСНОВНЫЕ СЕКЦИИ
let section1 = document.getElementById('head');                     //поиск фильмов
let section2 = document.getElementById('foolFilms');                //все фильмы
let section3 = document.getElementById('infoFilms');                //информация о фильмах

//ЗАПРОС ИНФОРМАЦИИ О ФИЛЬМЕ ЧЕРЕЗ API
function detailsRequest(method,url,id){
    let request
    if(window.XMLHttpRequest){
        request = new XMLHttpRequest()
    }
    else {
        request = new ActiveXObject("Microsoft.XMLHTTP")
    }
    request.responseType = 'json';
    request.open(method,url + `&t=[${id}]`)
    request.onreadystatechange = function (){
        if (request.readyState === 4){
            infoFilm = request.response;
            console.log(infoFilm)
            createInfo();
        }
    }
    request.send()
}

//СОЗДАНИЕ БЛОКА С ИНФОРМАЦИЕЙ И ЕГО ЗАПОЛНЕНИЕ
function createInfo() {
    infoBlock.innerHTML = `<img class="imgInfo" alt="Poster" src="${infoFilm.Poster}">`;
    let infoHead = ['Title', 'Released', 'Genre', 'Country', 'Director', 'Writer', 'Actors', 'Awards'];
    for (let i = 0; i < infoHead.length; i++) {
        infoBlock.innerHTML +=
            `<p class="pInf"><span class="spanInf">${infoHead[i]}:</span><span
                class="infoTxt">${infoFilm[infoHead[i]]}</span></p>`
    }
}

//ОЧИСТКА БЛОКА С ИНФОРМАЦИЕЙ
function closeInfo(){
    let close = document.getElementById('close');
    close.addEventListener('click',function (){
        section1.style.display = 'flex';
        section2.style.display = 'initial';
        section3.style.display = 'none';
        infoBlock.innerHTML = '';
    })
}

//ПЕРЕДАЕТСЯ В ДИВ С ФИЛЬМОМ ПРИ КЛИКЕ НА DETAILS
function detailsLook(e,iter){
    let id = fullFile.Search[iter].Title
    detailsRequest('GET',urlLink,id);
    section1.style.display = 'none';
    section2.style.display = 'none';
    section3.style.display = 'flex';
    closeInfo();
    e.preventDefault()
}