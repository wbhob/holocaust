import * as $ from 'jquery';

export function onScroll(callback: (e?: JQuery.Event) => void) {
    $(document).ready(function () {
        callback();
        $(window).scroll(callback);
    });
}
