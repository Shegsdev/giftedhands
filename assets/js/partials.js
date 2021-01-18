// Source: https://codepen.io/sergioandrade/pen/pXmKJv"
$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
    $(document).delegate('.ham_link', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});