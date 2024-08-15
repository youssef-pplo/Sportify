$('.awesome-tooltip').tooltip({
            placement: 'left'
        });  
        $('body').scrollspy({ 
            target: '#mainnav', 
            offset: 000
        });  
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {                   
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });


    $(document).ready(function () {
        $(window).on('scroll', function () {
            var scrollPos = $(document).scrollTop();
            $('nav a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('nav ul li').removeClass("active");
                    currLink.parent().addClass("active");
                } else {
                    currLink.parent().removeClass("active");
                }
            });
        });
    });

