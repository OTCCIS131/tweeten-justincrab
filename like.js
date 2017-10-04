 let buttons =  Array.from(document.getElementsByClassName("glyphicon glyphicon-heart"))

 buttons.forEach(btn =>{
  btn.addEventListener("click", () =>{
    var count = parseInt(btn.textContent) + 1
    btn.textContent = '\xA0' + count.toString() +'\xA0'
  });
 });