$(document).ready(function() {

    setSizes();

    $(window).resize(function() {
        setSizes();
    });

    $(document).on("scroll", onScroll);

    $('.nav-item').click(function(e) {
        e.preventDefault();
        var target = $(this).children('a').attr('href');
        $('html, body').animate({scrollTop:$(target).position().top + 1}, 700);
    });

    $('#profile-btn-contact').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:$('#contact').position().top + 1}, 700);
    })
})

$(window).on('load', function(){
    setTimeout(function() {
        $('#cover').fadeOut(1000);
        setTimeout(function() {
            $('.preload').removeClass("preload");
        }, 500);
        window.sr = ScrollReveal();
        sr.reveal('.masonry-item', {origin: 'left', duration: 500, scale: 0.9, delay: 200})
    }, 500);
})


function onScroll(event) {
    var scrollPos = $(document).scrollTop();

    $('#page-content section').each(function() {
        var refElement = $(this);

        if (refElement.position().top <= scrollPos + 1 && refElement.position().top + refElement.height() > scrollPos + 1) {
            var sectionName = refElement.attr('id');
            var activeLink = $('#vertical-nav li.active');
            var newLink = $('li a[href="#' + sectionName +'"]');

            $(activeLink).removeClass('active');
            $(newLink).parent('li').addClass('active');
        }
    })
}

function setSizes() {
    // $('#profile').css({'height': ($(window).height()) + 'px'});
    // $('#contact').css({'height': ($(window).height()) + 'px'});

    $('.project-item').each(function(i) {
        $(this).css({'height': ($(this).width()) + 'px'});
    })

    $('#stars-div').css({'height': ($(window).height()/2 + 'px')});
}
