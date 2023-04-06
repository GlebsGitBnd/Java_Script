one.addEventListener("click",function(e){       //для увеличения квадрата
  two.style.width = e.pageX + 'px'
  two.style.height = e.pageY + 'px'
  console.log(e);
})
two.addEventListener("click",function(e){       //для уменишения квадрата
  two.style.width = e.pageX + 'px'
  two.style.height = e.pageY + 'px'
  console.log(e);
})