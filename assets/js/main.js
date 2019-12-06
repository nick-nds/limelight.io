
$("#header-user").click(function() {
    $("#header-tooptip").fadeToggle();
});

sidebar_rrow = 1;

$(".sidebar-text").addClass("hidden");

$("#sidebar-arrow").animate({
    left: '+0px'
});

document.getElementById("sidebar-arrow").innerHTML = '<i class="fas fa-chevron-circle-right"></i>';


$("#sidebar-arrow").click(function() {

    if(sidebar_rrow == 0) {

        $(".sidebar-text").addClass("hidden");
        // $("sidebar").css('width', '10px');

        $("#sidebar-arrow").animate({
            left: '+0px'
        });

        // $("#sidebar-arrow").css({'transform' : 'rotate('+ 180 +'deg)'});
        document.getElementById("sidebar-arrow").innerHTML = '<i class="fas fa-chevron-circle-right"></i>';

        sidebar_rrow = 1;

    } else if(sidebar_rrow == 1) {
        $(".sidebar-text").removeClass("hidden");
        // $("sidebar").css('width', '10px');

        $("#sidebar-arrow").animate({
            left: '100px'
        });

        // $("#sidebar-arrow").css({'transform' : 'rotate('+ 180 +'deg)'});
        document.getElementById("sidebar-arrow").innerHTML = '<i class="fas fa-chevron-circle-left"></i>';

        sidebar_rrow = 0;
    }

});


