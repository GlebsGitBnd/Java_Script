//МАССИВ С ВОПРОСАМИ
let fullQuestion = [['How many letters are there in the world "Hello"?',5,2],
                    ['How many letters are there in the world "World"?',2,5],
                    ['How much is 2x2?',4,3],
                    ['What language is java script?','interpreted','compiled'],
                    ['How many oceans there are in the world?',4,5]];

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ БЛОКОВ С ВОПРОСАМИ
function createBlock(){
    let blockQues = document.getElementById('fullQuestions');
    for (let i = 0;i < fullQuestion.length;i++){
        let placeQues = document.createElement('div');
        placeQues.className = 'question';
        placeQues.innerHTML = `
            <p>${i + 1}) ${fullQuestion[i][0]}</p>
                 <form>
                        <label class="label">
                            <input type="radio" name="answer1" class="rB" disabled>
                            <span class="rBn"></span>
                            <span class="ans">${fullQuestion[i][1]}</span>
                        </label><br>
                        <label class="label">
                            <input type="radio" name="answer1" class="rB" disabled>
                            <span class="rBn"></span>
                            <span class="ans">${fullQuestion[i][2]}</span>
                        </label><br>
                        <label>
                            <button type="button">Next</button>
                        </label>
                </form>
           `
        blockQues.appendChild(placeQues);
    }
    let frm = document.forms[0]
    frm[0].disabled = false;
    frm[1].disabled = false;
}
createBlock();

let count = 0;                              //считает пройденные вопросы
let correctAnswer = 0;                      //считает правильные ответы

let button = document.getElementsByTagName('button');           //хранит все кнопки
let questions = document.getElementsByClassName('question');    //хранит блоки с воросами
let outFullQes = document.getElementById('outputQes');          //блок итоговым результатом

let fullAnswer = ['0','1','0','0','1'];

let label = document.getElementsByClassName('label');        //хранит все лейблы
label[0].style.opacity = '1';            //убираем прозрачность ответов первого вопроса
label[1].style.opacity = '1';            //убираем прозрачность ответов первого вопроса

//СОДЕРЖИТ ДАННЫЕ ДЛЯ ТЕСТА
class TestData{
    constructor(numQes,fullButt,outFullQes,fullAnswer) {
        this.numQes = numQes;                           //номер вопроса на момент ответа
        this.fullButt = fullButt                        //кнопки NEXT
        this.outFullQes = outFullQes                    //поле вывода результата тестировния
        this.fullAnswer = fullAnswer
        this.frm = document.forms[this.numQes];         //формы вопросов на момент ответа
    }
}

//КЛАСС ХРАНИТ СОСТОЯНИЕ RADIO НА МОМЕНТ ОТВЕТА
class AnswerCorrect extends TestData{
    correctPosition(){
        if (this.frm[this.fullAnswer[this.numQes]].checked) correctAnswer++;
    }
}

//ОТВЕЧАЕТ ЗА ОБРАБОТКУ ВОПРОСОВ
class GoToQes extends AnswerCorrect {
    //БЛОКИРУЕТ ПЕРВЫЙ ВОПРОС ПОСЛЕ НАЖАНИЯ NEXT
    qesNow(){
        this.frm[0].disabled = true;                    //блокирует первый ответ
        this.frm[1].disabled = true;                    //блокирует второй ответ
        this.fullButt[this.numQes].disabled = true;     //блокирует кнопку
        this.fullButt[this.numQes].style.opacity = "0.33";  //размывает
        this.numQes++;                                      //переход к следующему вопросу
    }
    //РАЗБЛОКИРЫВАЕТ СЛЕДУЮЩИЙ ВОПРОС
    nextQuestion(){
        this.frm = document.forms[this.numQes];             //устанавливает формы следующего вопроса
        this.frm[0].disabled = false;                       //разблокирывает 1 ответ след. вопроса
        this.frm[1].disabled = false;                       //разблокирывает 2 ответ след. вопроса
        this.fullButt[this.numQes].disabled = false;        //разблокирывает кнопку след. вопроса
        console.log(this.frm)
        console.log(this.frm.childNodes[1])
        this.frm.childNodes[1].style.opacity = '1';         //убирает размытие 1 ответа след вопроса
        this.frm.childNodes[4].style.opacity = '1';         //убирает размытие 2 ответа след вопроса
    }
    //ВЫВОДИТ ДАННЫЕ ЕСЛИ ВОПРОС ПОСЛЕДНИЙ
    finishTest(){
        this.correctPosition();
        this.qesNow();
        out.innerHTML = ' ' + correctAnswer;
        this.outFullQes.style.visibility = 'visible'
    }
}

//ОБРАБОТЧИК СОБЫТИЯ ПРИ ОТВЕТЕ НА ВОПРОС
function testEvent(count){
    button[count].addEventListener('click',function (){
        let test = new GoToQes(count,button,outFullQes,fullAnswer);              //экземпляр класса
        if (count !== questions.length - 1) {       //проверяет что вопрос не последний
            test.correctPosition();
            test.qesNow();                          //блокировка текущего вопроса
            test.nextQuestion();                    //разблокировка следующего вопроса
            count++;
            return testEvent(count);                //рекурсия до того момента пока вопрос не будет последним
        }
        if (count === questions.length - 1) {       //последний вопрос
            test.finishTest();
        }
    })
}
testEvent(count);