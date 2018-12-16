$(document).ready(function () {
    // navigation
    let nav_flag = false;
    let chevron_off = $('#chevron-off');
    let chevron_on = $('#chevron-on').addClass('disable');
    $('#nav-item-catalog').click(function () {
        if (nav_flag === false) {
            chevron_on.removeClass('disable');
            chevron_off.addClass('disable');
            nav_flag = true
        } else {
            chevron_on.addClass('disable');
            chevron_off.removeClass('disable');
            nav_flag = false
        }

    })
});