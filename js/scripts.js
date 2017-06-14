// business logic

function Ticket (movie, time) {
this.movieName = movie;
this.movieTime = time;
}

// UI logic
$(document).ready(function(){

  $(".see-movie").submit(function(event) {
    console.log("working");
    event.preventDefault();
// assigns value of selected number in select box.
    var inputAdult = document.getElementById("numberAdult").value;
    var inputChild = document.getElementById("numberChild").value;
    var inputSenior = document.getElementById("numberSenior").value;

    var total = (Number(inputAdult) + Number(inputChild) + Number(inputSenior));
    // The Number() function converts the object argument to a number that represents the object's value.
    $("#results").append("<li>" + "Adult: $" + inputAdult + "</li>" + "<li>" + "Child: $" + inputChild + "</li>" + "<li>" + "Senior: $" + inputSenior + "</li>" + "<li>" + "Total: $" + total + "</li>")

    $("#prices").show();
    $("#purchase").show();
  });

});
