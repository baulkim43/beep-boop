// business logic








// user interface logic
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    var numberInputed = $("input#number").val().split("");
    console.log(numberInputed);

  });
});
