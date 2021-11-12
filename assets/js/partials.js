// Source: https://codepen.io/sergioandrade/pen/pXmKJv"
$(document).ready(function() {
    const el = document.querySelector('.open');
    el.addEventListener('click', function(event) {
       if (el.classList.contains('opened')) {
            el.classList.remove('opened');
                event.stopPropagation();
        } else {
            el.classList.add('opened');
            event.stopPropagation();
        } 
    });
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('opened');
    });
    $(document).delegate('.ham_link', 'click', function(event){
        $('.open').removeClass('opened');
        event.stopPropagation();
    });
});