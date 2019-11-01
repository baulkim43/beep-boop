// business logic
var countBack = function(numberInputed) {

// var firstException = ["1"]
// var secondException = ["2"]
var thirdException = /"3"/gi;
// var exceptionOne = ["Beep!"]
// var exceptionTwo = ["Boop!"]
var exceptionThree = ["I'm sorry, Dave. I'm afraid I can't do that."]
var newArray = [];
for (i = 0; i <= numberInputed; newArray.push(i++ + " ")) {


}

  numberInputed = newArray;
  console.log(numberInputed);


  return numberInputed;


}




// user interface logic
$(document).ready(function() {
  $(".numberForm").submit(function(event) {
    event.preventDefault();
    var numberInputed = parseInt($("#number").val());
    console.log(numberInputed);
    var result = countBack(numberInputed);
    $("#result").text(result);

  });
});
