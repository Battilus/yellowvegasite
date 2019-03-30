$(document).ready(function () {
    // navigation
    let submenu = $('.submenu').addClass('disable');
    let nav_flag = false;
    let chevron_off = $('#chevron-off');
    let chevron_on = $('#chevron-on').addClass('disable');
    submenu.hide();
    $('#nav-item-catalog').click(function () {
        if (nav_flag === false) {
            // submenu.removeClass('disable');
            submenu.slideDown(100);
            chevron_on.removeClass('disable');
            chevron_off.addClass('disable');
            $('.topmenu a:contains("Каталог")').addClass("active-nav-item");
            nav_flag = true
        } else {
            // submenu.addClass('disable');
            submenu.slideUp(100);
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
        $('.topmenu span:contains("Каталог")').addClass("active-nav-item")
        $('.topmenu a:contains("Каталог")').addClass("active-nav-item")
    }

    //smart-navigation
    let flag_smart_menu = false;
    $('.menu-nav-button').click(function () {
        $('.topmenu-wrapper').toggleClass('menu-activate');
    });

    // slider
    let slider_main_img = $('.slider-main-img');
    let slider_small_img = $('.slider-small-img');
    let active_img = $('#slider-main-img-1');
    slider_main_img.hide();
    active_img.show();

    slider_small_img.click(function () {
        let selected_main_img = $('#' + $(this).data('id'));
        // console.log($(this).data('id'));
        // console.log(active_img[0]['id']);
        if ($(this).data('id') !== active_img[0]['id']) {
            active_img.fadeOut(200, function () {
                selected_main_img.fadeIn(200);
            });
            active_img = selected_main_img;
            slider_small_img.removeClass('active-small-img');
            $(this).addClass('active-small-img')
        }
    });

    //pagination

    let url_string = window.location.href; // www.test.com?filename=test
    let url1 = new URL(url_string);
    let get_page = url1.searchParams.get("page");
    $('.pag-item:contains(' + get_page + ')').addClass('pagination-active-item');
});
