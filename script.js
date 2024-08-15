$(document).ready(function () {
    // Smooth scrolling for internal links
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    // Function to handle active class based on scroll position
    function setActiveSection() {
        var scrollPos = $(document).scrollTop();

        $('section').each(function () {
            var currSection = $(this);
            var sectionTop = currSection.position().top;
            var sectionHeight = currSection.outerHeight();
            var sectionID = currSection.attr('id');
            var correspondingNavLink = $('a[href="#' + sectionID + '"]').parent();

            if (scrollPos >= sectionTop && scrollPos < (sectionTop + sectionHeight)) {
                $('nav ul li').removeClass('active');
                correspondingNavLink.addClass('active');
            }
        });
    }

    // Call the function on scroll and page load
    $(window).on('scroll', setActiveSection);
    setActiveSection(); // Initial check when the page loads
});
