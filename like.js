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


  let count = 0;

 let buttons =  Array.from(document.getElementsByClassName("glyphicon glyphicon-heart"))

 buttons.forEach(btn =>{
  btn.addEventListener("click", () =>{
    count++;
    btn.textContent = count
    // alert("Please work!");
  });
 });