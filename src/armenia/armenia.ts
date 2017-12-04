import { onScroll } from '../util';

let thresholdTop = window.innerHeight * 2.8;
let thresholdBottom = window.innerHeight * 4;

onScroll(() => {
    let offset = $('.hero.armenia').offset();
    let scroll = $(window).scrollTop();
    $('.hero.armenia h1').css({
        'transform': 'translateX(' + (scroll - offset.top) * 2 + 'px)',
    });
});
