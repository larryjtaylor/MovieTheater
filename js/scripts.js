// business logic

function Ticket (movie, time, age) {
this.movieName = movie;
this.movieTime = time;
this.userAge = age;
}

// function showTickets(){
//
// }
// UI logic
$(document).ready(function(){

  $(".see-movie").submit(function(event) {
    console.log("working");
    event.preventDefault();
    var inputAdult = document.getElementById("numberAdult").value;

    var inputChild = document.getElementById("numberChild").value;

    var inputSenior = document.getElementById("numberSenior").value;

    var total = "Total: " + (Number(inputAdult) + Number(inputChild) + Number(inputSenior));
    $("#results").append("<li>" + inputAdult + "</li>" + "<li>" + inputChild + "</li>" + "<li>" + inputSenior + "</li>" + "<li>" + total + "</li>")
  });
});
