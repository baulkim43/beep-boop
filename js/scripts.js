// business logic


var countBack = function(numberInputed) {
console.log(numberInputed);

var newArray = [];
for (i = 0; i <= numberInputed; newArray.push(i++)) {
}
console.log(newArray);
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
    $("#result").show(result);

  });
});
