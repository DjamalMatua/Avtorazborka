// DATA FILTER
$('#arrow-up').click(function(e) {
e.preventDefault();
$(this).find('span.arrow-up').toggleClass('active-up');
$(this).find('span.arrow-down').toggleClass('active-down');
});
$('#arrow-down').click(function(e) {
e.preventDefault();
$(this).find('span.arrow-up').toggleClass('active-up');
$(this).find('span.arrow-down').toggleClass('active-down');
});
$('#arrow').click(function(e) {
e.preventDefault();
$(this).find('span.arrow-icon').toggleClass('active_');
$('.hidden').toggleClass('active__');

});
$('#arrow2').click(function(e) {
e.preventDefault();
$(this).find('span.arrow-icon').toggleClass('active_');
$('.hidden2').toggleClass('active__');
});
/////

//HEART-ACTIVE
$(".heart").click(function(){
    $(this).toggleClass("active-heart");
});
///

// SEEN NUMBER
$(".seen-number").click(function(){
    $(".seen").css({"display" : "none"});
    $(".number").css({"display" : "block"});
});
///


// CHOSE COUNTRY
$(".loc").mouseover(function(){
    $("#ch-1").removeClass("none-modal-window");

    let clicked = true;
    $("#yes").click(function(){
        $("#ch-1").css({"display" : "none"});
        $("#ch-3").removeClass("none-modal-window");
        if(clicked){
            $(".city-list li").click(function(){
                $("#ch-3").addClass("none-modal-window");
                $("#ch-1").css({"display" : ""});
            });
        }
    });

    $("#no").click(function(){
        $("#ch-1").css({"display" : "none"});
        $("#ch-2").removeClass("none-modal-window");
        $(".by").click(function(){
            $("#ch-2").addClass("none-modal-window");
            $("#ch-4").removeClass("none-modal-window");
            if(clicked){
                $(".city-list li").click(function(){
                    $("#ch-4").addClass("none-modal-window");
                    $("#ch-1").css({"display" : ""});
                });
            }
        });
        $(".ru").click(function(){
            $("#ch-2").addClass("none-modal-window");
            $("#ch-3").removeClass("none-modal-window");
            if(clicked){
                $(".city-list li").click(function(){
                    $("#ch-3").addClass("none-modal-window");
                    $("#ch-1").css({"display" : ""});
                });
            }
        });
    });
});

$(".loc").mouseout(function(){
    $("#ch-1").addClass("none-modal-window");
});