// let buttons = document.getElementsByClassName("glyphicon glyphicon-heart")



// btn.array.forEach(function(element) {
//     button.addEventListender(click, e);{
//         let currentCount = btn.innerHTML
//         let currentCount = btn.nextSibling.textContent 
//          new count = parseInt(currentCount) +1


//     }
// }, this);


// Web page loading event
// window.addEventListener("load", e => {
//   alert("The page has been loaded!");
// });



 let buttons =  Array.from(document.getElementsByClassName("glyphicon glyphicon-heart"))

 buttons.forEach(btn =>{
  btn.addEventListener("click", () =>{
    var count = parseInt(btn.textContent) + 1
    btn.textContent = '\xA0' + count.toString() +'\xA0'
  });
 });