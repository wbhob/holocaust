import '../style/layout.scss';
import 'jquery';
import 'bootstrap';
import './first-hero/first-hero';
import './armenia/armenia';
import './holocaust/holocaust';
import './cambodia/cambodia';

import * as $ from 'jquery';
import * as Masonry from 'masonry-layout';

$(document).ready(() => {
    let el = document.getElementsByClassName('grid');
    for (let i = 0; i < el.length; i++) {
        new Masonry(el.item(i),
            {
                itemSelector: '.grid-item',
                percentPosition: true
            }
        );
    }

    // $('.grid-item').each(function () {
    //     let image = $(this).children('img')
    //     let url = image.attr('src');
    //     image.remove();
    //     $(this).css({
    //         'background-image': 'url(' + url + ')',
    //         'height': '200px',
    //         'position': 'static',
    //         'background-size': 'contain'
    //     });
    // })

    $('.graphic').css({
        'cursor': 'pointer'
    });
    $('.graphic').append(
        `<div class="overlay">
            <h5>This image may be considered graphic.</h5>
            <p>Click to remove this overlay.</p>
        </div>`
    );


    $('.graphic').click(function () {
        $(this).css('cursor', 'default');
    })


    $('.graphic .overlay').click(function () {
        $(this).fadeOut();
    });

});
