$(function () {
    //this code runs after page is fully loaded
    console.log("test 1");


    $("#nameform").on("submit", function (event) {
        event.preventDefault();
        $(".jumbotron").append($("#fname").val() + " " + $("#lname").val());
        $(".jumbotron").removeClass('d-none');

        console.log($("#fname").val());
        console.log('should be showing jumbotron');
        
        return false;

    });
});