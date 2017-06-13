// business logic

function Ticket (movie, time, age) {
this.movieName = movie;
this.movieTime = time;
this.userAge = age;
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

    var total = "Total: $" + (Number(inputAdult) + Number(inputChild) + Number(inputSenior));
    // The Number() function converts the object argument to a number that represents the object's value.
    $("#results").append("<li>" + "Adult: $" + inputAdult + "</li>" + "<li>" + "Child: $" + inputChild + "</li>" + "<li>" + "Senior: $" + inputSenior + "</li>" + "<li>" + total + "</li>")

    $("#prices").show();
    $("#purchase").show();
  });

});
