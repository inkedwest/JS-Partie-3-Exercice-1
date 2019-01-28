(function($){
    $(".action").mouseover(function(){
        $(this).css('border', '3px solid', 'red');
    }).mouseout(function(){
        $(this).css('border', '0px solid', 'red');
    });
})(jQuery);
