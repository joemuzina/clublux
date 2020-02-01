window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    let scroll_limit = $(window).height() * 0.4;

    if ((last_known_scroll_position > scroll_limit) && (!$(".scroll-alpha").hasClass("scrolled"))) {
        $(".scroll-alpha").addClass("scrolled");
    } else if ((last_known_scroll_position <= scroll_limit) && ($(".scroll-alpha").hasClass("scrolled"))) {
        $(".scroll-alpha").removeClass("scrolled");
    }
});