$(function() {
    $("#IGBar").mouseover(function(){
        $("#IGBar").css("opacity", "0.5");
        $("#IGOverlay").removeClass("d-none");
    });
        $("#IGOverlay").mouseout(function(){
        $("#IGBar").css("opacity", "1");
        $("#IGOverlay").addClass("d-none");
    });
    
});