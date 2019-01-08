$(document).ready(function () {
    // navigation
    let submenu = $('.submenu').addClass('disable');
    let nav_flag = false;
    let chevron_off = $('#chevron-off');
    let chevron_on = $('#chevron-on').addClass('disable');
    $('#nav-item-catalog').click(function () {
        if (nav_flag === false) {
            submenu.removeClass('disable');
            chevron_on.removeClass('disable');
            chevron_off.addClass('disable');
            $('.topmenu a:contains("Каталог")').addClass("active-nav-item");
            nav_flag = true
        } else {
            submenu.addClass('disable');
            chevron_on.addClass('disable');
            chevron_off.removeClass('disable');
            $('.topmenu a:contains("Каталог")').removeClass("active-nav-item");
            nav_flag = false
        }
    });


    let url = document.URL.split('/')[3];
    if (url === '' || url === '#') {
        $('.topmenu a:contains("Главная")').addClass("active-nav-item")
    } else if (url === 'about') {
        $('.topmenu a:contains("Обо мне")').addClass("active-nav-item")
    } else if (url === 'delivery') {
        $('.topmenu a:contains("Доставка")').addClass("active-nav-item")
    } else if (url === 'payment') {
        $('.topmenu a:contains("Способы оплаты")').addClass("active-nav-item")
    } else if (url === 'catalog') {
        $('.topmenu a:contains("Каталог")').addClass("active-nav-item")
    }
});
