table.addEventListener("mouseover", function (e){
  let target = event.target;                //Записываем дочерний элемент таблицы
                                            //находящийся под курсором мышки
target.style.background = "#FA8072";          //меняем фон
})
table.addEventListener("mouseout", function (e){      //тоже самое когда уходим
  let target = event.target;
  target.style.background = '';
})