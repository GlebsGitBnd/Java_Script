oncontextmenu = function() { return false };      //отключили контекстное меню
let colMass = document.getElementsByTagName('th');   //для кликов по заголовкам
let fullTable = document.getElementById('table');     //для получения значений из таблицы
let numCol = 0;                                       //забирает в себя номер нажатой колонки
let tableCol = [];                          //для записи массива ввиде колонок
let name = '';                              //для сортировки по имени
let age = '';                               //для сортировки по возрасту

class MainTable {
  constructor(table, stack, num) {
    this.table = table;
    this.stack = stack;
    this.num = num;

  }
}
class MassOfColl extends MainTable {
  constructor(table, stack, num, collMass, name, age) {
    super(table, stack, num);
    this.collMass = collMass;
    this.name = name;
    this.age = age;
  }
  //МЕДОД ДЛЯ СОЗДАНИЯ МАССИВА
  post() {
    for (let i = 1; i < this.table.rows.length; i++) {
      this.collMass.push(this.table.rows[i].cells[this.num].innerHTML);
    }
    console.log(this.collMass);
  }

  //МЕТОД ДЛЯ СОЗДАНИЕ ОБЪЕКТОВ ИЗ ИНДЕКСОВ МАССИВА
  tableColObj() {
    for (let i = 0; i < this.collMass.length; i++) {
      for (let key = 0; key < this.collMass[i].length; key++) {
        switch (true) {
          case (isNaN(this.collMass[i][key]) === false):
            this.age += this.collMass[i][key];
            break;
          case (isNaN(this.collMass[i][key]) === true):
            this.name += this.collMass[i][key];
        }
      }
      this.collMass[i] = {"name": this.name, "age": this.age};
      this.name = '';
      this.age = '';
    }
  }
}

class SortMass extends MassOfColl{
  //МЕТОД ДЛЯ СОРТИРОВКИ ПО ИМЕНИ
  sortName() {
    this.collMass.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
  }

  //МЕТОД ДЛЯ СОРТИРОВКИ ПО ВОЗРАСТУ
  sortAge() {
    this.collMass.sort((a, b) => a.age - b.age);
  }
}

class PrintColl extends SortMass{
  //МЕТОД ДЛЯ ВЫВОДА ОТСОРТИРОВАННОГО ТЕКСТА В ТАБЛИЦУ
  innerTable(){
    for (let i = 1;i < table.rows.length; i++ ){
      this.table.rows[i].cells[this.num].innerHTML = tableCol[i - 1].name +
      this.collMass[i - 1].age;
    }
  }
}



for(let i = 0;i < colMass.length;i++){                        //срабатывает при событии
  colMass[i].addEventListener("mousedown", function (e){       //меняется фон при нажатии мыши
    let target = event.target;
    target.style.background = "#777676"
  })
  colMass[i].addEventListener("mouseup", function (e){           //меняется фон если отпущена кнопка мыши
    let target = event.target;
    target.style.background = "#d08401"
  })
  colMass[i].addEventListener("mousedown",function (e){         //событие для сортировки
    numCol = i;
    let tableSort = new PrintColl(fullTable, colMass, numCol, tableCol,name,age);   //создается экземпляр таблицы
    tableSort.post();                                           //собирает массив
    tableSort.tableColObj();           //делает объекты из индексов массива для сортировки по name и age
    if (event.which === 1) {
      tableSort.sortName();           //сортирует по имени при нажатии левой кнопки
    }
    if (event.which === 3) {
      tableSort.sortAge();            //сортирует по возрасту при нажатии правой кнопки
    }
    tableSort.innerTable();           //выводит данные в таблицу
    tableCol = [];                    //стирает все предыдущие значения
  })
}