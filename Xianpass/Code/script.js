$(document).ready(function() {
    $('.intro img').each(function(index) {
        $(this).delay(400 * index).queue(function(next) {
            $(this).addClass('animated');
            next();
        });
    });
});


