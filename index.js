$(function () {
    //this code runs after page is fully loaded
    console.log("test 1");


    $("#nameform").on("submit", function (event) {
        event.preventDefault();
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var newHTML= `<h1>${fname} ${lname}</h1>`
        $(".jumbotron").removeClass('d-none').html(newHTML);;

        console.log($("#fname").val());
        console.log('should be showing jumbotron');
        
        return false;

    });
});