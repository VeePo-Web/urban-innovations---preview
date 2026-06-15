/*
 * jQuery Cycle Lite Plugin - Slideshow
 */

$(function() {
    $('#slideshow1').cycle();
});

$(function() {
    $('#main_imgroll').cycle();
});

$(function() {
    /* About page only — a bit faster than the 4000ms default */
    $('#ab_imgroll').cycle({ timeout: 2500 });
});

$(function() {
    $('#rnt_imgroll').cycle();
});

$(function() {
    $('#cnct_imgroll').cycle();
});