// business logic


var countBack = function(number) {
var exceptions = ["1", "2", "3"]
var i;
for (i = 0; i <= numberInputed.length; i++) {
  console.log(text += numberInputed);
}
}







// user interface logic
$(document).ready(function() {
  $(".numberForm").submit(function(event) {
    event.preventDefault();
    var numberInputed = $("#number").val().split("");
    console.log(numberInputed);
    var result = countBack(numberInputed);

  });
});
