import { onScroll } from '../util';

onScroll(() => {
    let offset = $('.hero.cambodia').offset();
    let scroll = $(window).scrollTop();
    let pos = (scroll - offset.top);
    $('.hero.cambodia h1').css({
        'transform': 'translateY(' + -pos / 3 + 'px)'
    });
});
