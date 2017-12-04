import { onScroll } from '../util';

let thresholdTop = window.innerHeight * 2.8;
let thresholdBottom = window.innerHeight * 4;

onScroll(() => {
    let offset = $('.hero.rwanda').offset();
    let scroll = $(window).scrollTop();
    $('.hero.rwanda h1').css({
        'transform': 'skew(' + (scroll - offset.top) / 7 + 'deg)',
    });
});
