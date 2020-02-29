$(function() {
    $("#IGCard").mouseover(function(){
        $("#IGBar").css("opacity", "0.5");
        $("#IGOverlay").removeClass("d-none");
    });
        $("#IGCard").mouseout(function(){
        $("#IGBar").css("opacity", "1");
        $("#IGOverlay").addClass("d-none");
    });
});

$(function(){
    $(".carousel").carousel("cycle");
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

$(function() {
    $("#requestEvent").click(function(){
        $("#eventModal").modal("show");
    });
});

$(function() {
    $("#menuButton").mouseover(function(){
        $("#menuButton").css("filter", "invert(100%)");
    });
    $("#menuButton").mouseout(function(){
        $("#menuButton").css("filter", "invert(0%)");
    });
    $("#farmButton").mouseover(function(){
        $("#farmButton").css("filter", "invert(100%)");
    });
    $("#farmButton").mouseout(function(){
        $("#farmButton").css("filter", "invert(0%)");
    });
});