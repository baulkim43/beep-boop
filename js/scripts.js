// business logic
var countBack = function(numberInputed) {

// var firstException = ["1"]
// var secondException = ["2"]
var thirdException = [3, 13, 23]
// var exceptionOne = ["Beep!"]
// var exceptionTwo = ["Boop!"]
var exceptionThree = ["I'm sorry, Dave. I'm afraid I can't do that."]
var newArray = [];
for (i = 0; i <= numberInputed; newArray.push(i++ + " ")) {
  if (thirdException.includes(numberInputed)) {
    
  }
}
  numberInputed = newArray;


  return numberInputed;


}




// user interface logic
$(document).ready(function() {
  $(".numberForm").submit(function(event) {
    event.preventDefault();
    var numberInputed = parseInt($("#number").val());
    console.log(numberInputed);
    var result = countBack(numberInputed);
    $("#result").append(result);

  });
});
