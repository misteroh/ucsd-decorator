$(document).ready(function() {

    var $body = $('body'),
        desktopBreak = 768,
        maxNavHeight = 38,
        $topNav = $('#tdr_nav'),
        $window = $(window),
        $search = $topNav.find('.tdr_search'),
        $searchBtn = $topNav.find('.btn-default'),
        $navList = $('.tdr_nav_list'),

    /* do we have a nav menu? */
        hasNav = false;


    if ($navList.find('> li').length > 0) {
        hasNav = true;
    }

    if (hasNav) {
        /* init nav menu */
        $navList.superfish({
            cssArrows: false
        });
    } else {
        /* hide menu icon */
        $("#tdr_title_menu_link").attr("style", "display: none");
        $("#tdr_title_content").addClass("noMenu");
    }

    /* search link */
    $("#tdr_search_toggle").click(function(event) {
        $search.toggleClass("show");
    });

    $("#tdr_search_toggle").click(function(event) {
        $searchBtn.toggleClass("btn-s");
    });

    $(".navbar-toggle").on("click", function() {
        $body.toggleClass("active");
        if ($('#tdr_search_content>form').length) {
            $('#tdr_search_content>form').appendTo($('.nav-offcanvas>.tdr_search'));
            $('#tdr_nav .tdr_nav_list').appendTo('#tdr_side_nav');
        } else {
            $('.nav-offcanvas>.tdr_search>form').appendTo($('#tdr_search_content'));
            $('#tdr_side_nav>.tdr_nav_list').prependTo('#tdr_nav_content');
        }
        /* init nav menu */
        $navList.superfish({
            cssArrows: false
        });
    });

    function navMover() {
        alert('calling navMover');
        if ($window.width() >= desktopBreak) {
            alert('beyond breakpoint');

            if ($body.hasClass("active")) {
                alert('has active class');

                $body.removeClass("active");

                if ($('#tdr_search_content>form').length) {
                    //
                } else {
                    $('.nav-offcanvas>.tdr_search>form').appendTo($('#tdr_search_content'));
                    $('#tdr_side_nav>.tdr_nav_list').prependTo('#tdr_nav_content');
                    /* init nav menu */
                    $navList.superfish({
                        cssArrows: false
                    });
                }

            }

            if ($topNav.height() > maxNavHeight ) {
                alert('nav to tall. collapsing');
                $body.addClass('collapse-nav');
            } else {
                alert('nav ok. remove collapse tag');
                $body.removeClass('collapse-nav');
            }
        }

        if ($window.width() < desktopBreak && $body.hasClass("collapse-nav")) {
            alert('remove collapse nav');
            $body.removeClass("collapse-nav");
        }


    }


    FastClick.attach(document.body);

    // Detecting IE
    var oldIE = false;
    if ($('html').is('.ie7, .ie8')) {
        oldIE = true;
    }

    if (oldIE == false) {
        alert('executing navMover');
        $window.on('load orientationchange resize', navMover);
    }

});