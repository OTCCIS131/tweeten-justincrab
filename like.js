// let buttons =  Array.from(document.getElementsByClassName("glyphicon glyphicon-heart"))

// buttons.forEach(btn =>{
//  btn.addEventListener("click", () =>{
//    var count = parseInt(btn.textContent) + 1
//    btn.textContent = '\xA0' + count.toString() +'\xA0'
//  });
// });

//new tweet - VANILLA
document.getElementById("tweetbutton").addEventListener("click", () => {
  // Get the full tweet package to clone
  var thetweet = document.getElementById("thetweet");

  // Copy the tweet and the text in the text area
  var copy = thetweet.cloneNode(true);
  var copytext = document.getElementById("TweetForm").value;

  // add the text to the new tweet
  copy.querySelector("#textofTweet").innerHTML = copytext;

  // append the new tweet to the top of the list (but after the tweet stats bar)
  document.getElementById("middleLower").insertBefore(copy, document.getElementById("tweetStats").nextSibling);
})



//like button counter
$(function() {
  $('.glyphicon.glyphicon-heart').click(({target}) => { //((({target}))) sets "this" to what is clicked
    let countTag = $($(target).children('span')[0])
    // debugger
    let count = parseInt(countTag.text())+1
    $(target).Text(count)
  })
})