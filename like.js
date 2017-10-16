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

// //new tweet - JQUERY
// $(".tweetbutton").on("click", () => {
//   // Get the full tweet package to clone
//   var thetweet = $("#thetweet");

//   // Copy the tweet and the text in the text area
//   var copy = thetweet.cloneNode(true);
//   var copytext = $("#TweetForm").value;

//   // add the text to the new tweet
//   copy.querySelector("#textofTweet").innerHTML = copytext;

//   // append the new tweet to the top of the list (but after the tweet stats bar)
//   $("#middleLower").insertBefore(copy, $("#tweetStats").nextSibling);
// })

//like button counter - JQUERY
$( ".heart" ).on("click", function() {
  var count = parseInt(document.getElementById("heartcount").textContent)
  count += 1;
  $(".heartcount").text('\xA0' + count + '\xA0')
})

//like button counter - VANILLA
// let buttons =  Array.from(document.getElementsByClassName("glyphicon glyphicon-heart"))

// buttons.forEach(btn =>{
//  btn.addEventListener("click", () =>{
//    var count = parseInt(btn.textContent) + 1
//    btn.textContent = '\xA0' + count.toString() +'\xA0'
//  });
// });