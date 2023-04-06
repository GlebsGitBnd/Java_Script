let cnt = document.getElementById("count");     //связали переменную с элементом по id
console.log(cnt);
let count = 10;
main.addEventListener("click", function (){
    count++;                        //увеличили счетчик по клику
    cnt.innerHTML = count;          //вывели значение счетчика в тег
})