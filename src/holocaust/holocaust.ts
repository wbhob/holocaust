import { onScroll } from '../util';

onScroll((e) => {
    let offset = $('.hero.holocaust').offset();
    let scroll = $(window).scrollTop();

    if (scroll > offset.top && scroll < offset.top + window.innerHeight + 150) {
        $('.hero.holocaust h1').css({
            '-webkit-transform': 'scale(' + (.66 + (scroll + 100 - offset.top) / 500) + ')',
        });
    }
});
