// let buttons =  Array.from(document.getElementsByClassName("glyphicon glyphicon-heart"))

// buttons.forEach(btn =>{
//  btn.addEventListener("click", () =>{
//    var count = parseInt(btn.textContent) + 1
//    btn.textContent = '\xA0' + count.toString() +'\xA0'
//  });
// });
$(function() {
  $('.glyphicon.glyphicon-heart').click(({target}) => { //((({target}))) sets "this" to what is clicked
    let countTag = $($(target).children('span')[0])
    // debugger
    let count = parseInt(countTag.text())+1
    $(target).Text(count)
  })
})