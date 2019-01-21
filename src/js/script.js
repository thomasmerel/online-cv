var timeout = false;

$(function () {
    new ClipboardJS(".clipboard");
    $('[data-toggle="tooltip"]').tooltip();

    ifScrollify();
    $(window).on('resize', function () {
        ifScrollify();
    });

    $("a[href*='#']:not([href='#'])").click(function () {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
            if (anchor.length) {
                $("html, body").animate({scrollTop: anchor.offset().top}, 1100);
            }
        }
    });

    calcAge();

    setInterval(function () {
        plusSlides(1);
    }, 5000);
});

function ifScrollify() {
    if ($(window).width() < 767) {
        $.scrollify.destroy();
    }
    else {
        $.scrollify({
            section: ".slide",
        });
    }
}

function copyCp() {
    if (timeout === false) {
        $.notify({
            // options
            message: 'Copied to clipboard'
        }, {
            // settings
            type: 'dark',
            delay: 2000,
            allow_dismiss: false,
            animate: {
                enter: 'animated fadeInUp',
                exit: 'animated fadeOutDown'
            },
            placement: {
                from: "bottom",
                align: "center"
            }
        });
        timeout = true;
    }

    setTimeout(function () {
        timeout = false;
    }, 3000);
}

function calcAge() { // birthday is a date
    var birthday = new Date('1994-03-14');
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    $('#age').html(age)
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        //Hiding $(slides[i])
        $(slides[i]).fadeOut('slow');
    }
    //Show $(slides[slideIndex-1])
    setTimeout(function () {
        $(slides[slideIndex - 1]).fadeIn('slow')
    }, 600);
}