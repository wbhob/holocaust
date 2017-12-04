import * as $ from 'jquery';

import { onScroll } from './util';

onScroll(() => {
    let offset = $('.last-hero').offset();
    let scroll = $(window).scrollTop();
    if (scroll > offset.top) {
        $('.last-hero h1').css({
            // 'transform': 'translateY(' + (scroll / 5) + 'vh)',

            'top': 'calc(100% - ' + scroll / 10 + ')',
            opacity: (scroll - offset.top) / 800
        });
        // console.log($('#first-hero-never-again').css('transform'))
    } else {
        $('.last-hero h1').css({
            opacity: 0
        });
    }
});
$(document).ready(() => {
    let offset = $('.last-hero').offset();
    let tops = [[0, 40]];
    function generateTops() {
        return offset.top - 4000 + (Math.floor(Math.random() * 700)) + (Math.random() * 60);
    }
    $('ul.items li').each(function () {
        let top = generateTops();
        let left = generateLeft();
        $(this).css({
            position: 'absolute',
            top,
            left
        });
        (function loop() {
            console.log('loop');

            $(this).fadeOut(2000);
            setTimeout(() => {
                console.log('loop2');
                $(this).fadeIn(2000, () => {
                    loop();
                });
            }, 2000)
        })();
    })
});

function generateLeft() {
    let left = Math.floor(Math.random() * window.innerWidth);
    return left;
    // if (left < (window.innerWidth - 800) / 2 || (left > 800 + (window.innerWidth - 800) / 2) && left < (window.innerWidth - 100)) {
    //     return left;
    // } else {
    //     return generateLeft();
    // }
}
