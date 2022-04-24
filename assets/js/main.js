//Animataion
AOS.init();

$(document).ready(function () {


    $('.head-btn').click(function () {
        $('.side-menu').addClass("offcanvas-menu");
        $('.head-btn').addClass("show");
    })
    $('.close-btn').click(function () {
        $('.head-btn').removeClass("show");
        $('.side-menu').removeClass("offcanvas-menu");
    })
    $('.head').click(function () {
        $('.head-btn').removeClass("show");
        $('.side-menu').removeClass("offcanvas-menu");
    })

    $('.social-trg').click(function () {
        $('.social-grp').toggle(500);
    })

    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize >= 992) {
            $('.side-menu').removeClass("offcanvas-menu");
        }
    }
    checkwidth();
    $(window).resize(checkwidth);

})