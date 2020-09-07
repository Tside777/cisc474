$(function(){
    //this code runs after page is fully loaded
    console.log("test 1");
    });


$("#nameform").on("submit", function( event ) {
    event.preventDefault();
    console.log("Hello!");
   /* event.preventDefault();
    console.log("test");
   // $(".jumbotron").prepend($("#fname".text + $("#lname".val()));
    $(".jumbotron").show();
    */

});