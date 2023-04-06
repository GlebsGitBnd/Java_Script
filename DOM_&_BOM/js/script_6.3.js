let rowOfTable = document.getElementsByTagName("tr");
let general = document.getElementsByClassName("general");

function infoForTab() {
    for (let i = 0; i < rowOfTable.length; i++) {       //проходим по каждой строке

        rowOfTable[i].addEventListener("click", function (e) {      //обработчик при клике на нужную вкладку
            for (let j = 0; j < general.length; j++) {           //обнуляем ранее открытую вкладку
                general[j].style.display = "none";
            }
        rowOfTable[i + 1].style.display = 'table-row';          //открываем информацию о вкладке
        })
    }
}
infoForTab();