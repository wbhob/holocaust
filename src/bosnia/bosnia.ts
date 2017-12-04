import { onScroll } from '../util';

let thresholdTop = window.innerHeight * 2.8;
let thresholdBottom = window.innerHeight * 4;

onScroll(() => {
    let offset = $('.hero.bosnia').offset();
    let scroll = $(window).scrollTop();
    if (scroll < offset.top) {
        console.log(scroll - offset.top);

        $('.hero.bosnia h1').css({
            'opacity': 1 - ((offset.top - scroll) / 400),
            'transform': 'translateY(' + (scroll - offset.top) / 2 + 'px)',
        });
    }
});
