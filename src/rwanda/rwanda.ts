import { onScroll } from '../util';

onScroll(() => {
    let offset = $('.hero.rwanda').offset();
    let scroll = $(window).scrollTop();
    $('.hero.rwanda h1').css({
        'transform': 'skew(' + (scroll - offset.top) / 7 + 'deg)',
    });
});
