oncontextmenu = function() { return false };      //отключили контекстное меню

let fullTable = document.getElementById('table');     //для получения значений из таблицы
let tableCol = document.getElementsByTagName('th');   //для кликов по заголовкам
let numCol = 0;                                       //забирает в себя номер нажатой колонки
let colMass = [];                          //для записи массива нажатой колонки(numCol)

let name = '';                              //для сортировки по имени
let age = '';                               //для сортировки по возрасту

//1. ОСНОВНОЙ КЛАСС ВСЕЙ ТАБЛИЦЫ
class MainTable {
  constructor(table, stack, num) {
    this.table = table;
    this.stack = stack;
    this.num = num;

  }
}

//2. КЛАСС СОЗДАЮЩИЙ МАССИВ НЕОБХОДИМОЙ КОЛОНКИ И РАБОТОЙ С НИМ
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

//3. КЛАСС СОРТИРУЮЩИЙ МАССИВ КОЛОНКИ
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

//4. КЛАСС ВЫВОДЯЩИЙ ОТСОРТИРОВАННУЮ КОЛОНКУ В ТАБЛИЦУ
class PrintColl extends SortMass{
    //МЕТОД ДЛЯ ВЫВОДА ОТСОРТИРОВАННОГО ТЕКСТА В ТАБЛИЦУ
    innerTable(){
      for (let i = 1;i < table.rows.length; i++ ){
        this.table.rows[i].cells[this.num].innerHTML = this.collMass[i - 1].name +
        this.collMass[i - 1].age;
      }
    }
  }


//5. КЛАСС ОТВЕЧАЮЩИЙ ЗА ВЫБОР КОЛОНКИ ДЛЯ СОРТИРОВКИ
class FinaleClick extends  PrintColl {
  //МЕТОД ОТВЕЧАЮЩИЙ ЗА НАЖАТИЕ НА ЗАГОЛОВОК КОЛОНКИ
  clickForColumn(){
    for(let i = 0;i < this.stack.length;i++){                        //срабатывает при событии
      this.stack[i].addEventListener("mousedown", function (e){       //меняется фон при нажатии мыши
        let target = e.target;
        target.style.background = "#777676"
      })
      this.stack[i].addEventListener("mouseup", function (e){           //меняется фон если отпущена кнопка мыши
        let target = e.target;
        target.style.background = "#d08401"

        //ПОСЛЕ ТОГО КАК ОТПУСТИЛИ КНОПКУ МЫШИ СОЗДАЛСЯ ЭКЗЕМПЛЯР
        // НУЖНОЙ КОЛОНКИ И ВЫВЕЛСЯ В ТАБЛИЦУ
        numCol = i;                             //записали в себя нажатую колонку для передачи в экземпляр

        let tableSort = new PrintColl(fullTable, tableCol, numCol, colMass,name,age);   //создается экземпляр нажатой колонки

        tableSort.post();                   //собирает массив
        tableSort.tableColObj();           //делает объекты из индексов массива для сортировки по name и age

        if (e.which === 1) {
          tableSort.sortName();           //сортирует по имени при нажатии левой кнопки
        }
        if (e.which === 3) {
          tableSort.sortAge();            //сортирует по возрасту при нажатии правой кнопки
        }
        tableSort.innerTable();           //выводит данные в таблицу

        colMass = [];                     //стерли массив
      })
    }
  }
}

//создали экземпляр последнего класса
let sortForColumn = new FinaleClick(fullTable, tableCol, numCol, colMass,name,age);

sortForColumn.clickForColumn(); //вызвали метод для определения нажатой колонки