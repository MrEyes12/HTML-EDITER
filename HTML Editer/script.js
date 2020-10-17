function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#csspanel").val()+
    "</style></head><body>"+$("#htmlpanel").val()+"</body></html>"); 
}

$(".toggleButton").hover(function () {          //this is for header section. making stylish 
    $(this).addClass("highlightButton");        
}, function () {
    $(this).removeClass("highlightButton");

});
$(".toggleButton").click(function () {          //this is also for styling the header section
    $(this).toggleClass("active");
    $(this).removeClass("highlightButton");
    var panelId= $(this).attr("id")+"panel";
   $("#"+panelId).toggleClass("hidden");
   var numberOfHiddenClass= 4 - $(".hidden").length;
   $(".panel").width(($(window).width() / numberOfHiddenClass) - 10);
});

$(".panel").height($(window).height() - $("#header").height() - 15);  //for making panel size equel to window

$(".panel").width(($(window).width() / 2) - 10);
updateOutput(); 

$("textarea").on("change keyup paste", function(){
    updateOutput();
});




