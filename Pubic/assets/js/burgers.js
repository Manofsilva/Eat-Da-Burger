$(function(){
    $(".change-state").on("click",
    function(event){
        var id = $(this).data("id");
        var newStatus = $(this).data("newstatus");

        var newStatusState = {
            devoured: newStatus
        }

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newStatusState
        }).then(function(){
            console.log("changed state to", newStatus)
            location.reload();
        });
    });

    $(".create-form").on("submit", 
    function(event){
        event.preventDefault();

        var newBurger ={
            burger_name: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Crafted a Burger");

            location.reload();
        });
    });
});