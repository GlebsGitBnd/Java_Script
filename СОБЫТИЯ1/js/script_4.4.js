oncontextmenu = function() { return false };      //отключили контекстное меню
let сolumn = document.getElementsByTagName('th');   //для кликов по заголовкам
let table = document.getElementById('table');     //для получения значений из таблицы
let tableMas = [];                          //для записи массива полученных значений из таблицы
let tableCol = [];                          //для записи массива ввиде колонок
let name = '';                              //для сортировки по имени
let age = '';                               //для сортировки по возрасту


for (let i = 1; i < table.rows.length; i++){
  tableMas.push([]);      //создаем места для массивов строки
  for (let key = 0;key < table.rows[i].cells.length;key++){
    tableMas[i-1].push(table.rows[i].cells[key].innerHTML);
  }
}
console.log(tableMas);
//получаем массив значений из таблицы


for (let i = 0; i < tableMas.length; i++){
  for(let key = 0;key < tableMas[i].length; key++){
    if (tableCol.length < tableMas[i].length){
      tableCol.push([]);
    }
    tableCol[key][i] = tableMas[i][key];
  }
}
console.log(tableCol);
//делаем из прошлого массива массив с колонками(для сортировки)


function tableColObj() {
  for (let i = 0; i < tableCol.length; i++) {
    for(let key = 0;key < tableMas[i].length; key++) {
      for(let keyX = 0;keyX < tableCol[i][key].length; keyX++) {
        switch (true) {
          case (isNaN(tableCol[i][key][keyX]) === false):
            age += tableCol[i][key][keyX];
            break;
          case (isNaN(tableCol[i][key][keyX]) === true):
            name += tableCol[i][key][keyX];
        }
      }
      tableCol[i][key] = {"name" : name, "age" : age};
      name = '';
      age = '';
    }
  }
}
tableColObj();
//создаем объекты из имени и возраста(для сортировок)

for (let i = 0; i < сolumn.length; i++){
  сolumn[i].addEventListener("mousedown", function (e){       //меняется фон при нажатии мыши
  let target = event.target;
  target.style.background = "#777676"
})

сolumn[i].addEventListener("mouseup", function (e){           //меняется фон если отпущена кнопка мыши
  let target = event.target;
  target.style.background = "#d08401"
})

  сolumn[i].addEventListener("mousedown", function(e) {
    switch (true){
      case (event.which == 1):
        tableCol[i].sort(function(a, b){
          return a.age-b.age;              //вычисляет какая цифра больше
        });
        break
//Сортировка по возрасту при клике левой кнопкой мыши


      case (event.which == 3):
          tableCol[i].sort(function (a,b) {
           if (a.name < b.name) {          //задает приоритет буквам(чем буква
               return -1;                       //ниже тем ниже будет стоять объект)
           }
           if (a.name > b.name) {          //задает приоритет буквам( чем буква
               return 1;                       //выше тем выше объект)
           }
           return 0;
       })
    }
//Сортировка по имени при клике правой кнопкой мыши


    for (let inner = 1;inner < table.rows.length; inner++ ){
      table.rows[inner].cells[i].innerHTML = tableCol[i][inner - 1].name +
      tableCol[i][inner - 1].age;
    }
//Возвращаем отсортированные значения в таблицу

  });
}