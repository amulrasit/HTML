$(document).ready(function () {
    

    $('#add').on('mouseover', function () {
        $(this).css({ "background-color": "#FF5050" });
    });

    $('#add').on('mouseleave', function () {
        $(this).css({ "background-color": "#FF9696" });
    });
    
     $('input').on('focus', function () {
        $('input').val('');
    });   
    
    $('button').on('click', function ()
     {
       var itemName=$('input').val();
       $('#shop ul').append("<li class='item'>"+itemName+"</li>");       
       });
       $('li').click(function(){
       alert(this);
        $(this).css({"text-decoration":"overline"});
       });
   });