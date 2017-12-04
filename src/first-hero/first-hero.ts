import * as $ from 'jquery';

function getScroll() {
    let scroll = $(window).scrollTop();
    if (scroll < 800) {
        $('#first-hero-never-again').css({
            // 'transform': 'translateY(' + (scroll / 5) + 'vh)',

            'top': 'calc(' + scroll / 10 + '% + 15%)',
            opacity: (1 - scroll / 800)
        });
        // console.log($('#first-hero-never-again').css('transform'))
    } else {
        $('#first-hero-never-again').css({
            // 'transform': 'translateY(' + (scroll / 5) + 'vh)',

            'top': 'calc(' + scroll / 10 + '% + 15%)',
            opacity: 0
        });
    }
}

$(document).ready(() => {
    getScroll();
    $(window).scroll(() => {
        getScroll();
    });
});
