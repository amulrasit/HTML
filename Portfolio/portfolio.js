$(document).ready(function () {
    $('.spin').on('mouseover', function () {
        $(this).css({ "background-color": "#FF5050" });
    });

    $('#PFSection').on('mouseenter', 'li', function () {

        $(this).find(".text-content").addClass('descDisplay').slideDown(1000);
    });

    $('#PFSection').on('mouseleave', 'li', function () {
        $(this).find(".text-content").removeClass('descDisplay').slideUp(1000);

    });

    $("#about").click(function (event) {
        event.preventDefault();
        $("#panelAbout").show();
        $("#panelContact").hide();
    });

    $("#contact").click(function (event) {
        event.preventDefault();
        $("#panelAbout").hide();
        $("#panelContact").show();
    });

    $("#port").click(function () {        
        $("#panelAbout").hide();
        $("#panelContact").hide();
    });

  });

function test()
{
    alert("hi");
}