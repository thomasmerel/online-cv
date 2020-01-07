let timeout = false;

$(function () {
    new ClipboardJS(".clipboard");
    $('[data-toggle="tooltip"]').tooltip();

    $.scrollify({
        section: ".slide",
    });
    $.scrollify.disable();

    AOS.init({
        duration: 500,
        once: true
    });

    $("a[href*='#']:not([href='#'])").click(function () {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//, "") == location.pathname.replace(/^\//, "")
        ) {
            let anchor = $(this.hash);
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
    let birthday = new Date('1994-03-14');
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);
    $('#age').html(age)
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
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

let k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {

            let home = $('#home');

            home.css(
                'background-image', 
                "repeating-linear-gradient(45deg, #003b6f, #003b6f 100px, #c1c3c6 100px, #c1c3c6 190px )"
            );

            let root = document.documentElement;
            root.style.setProperty('--gradient-first', "#003b6f");
            root.style.setProperty('--gradient-second', "#003b6f");

            home.prepend(
                '<img id="ravenclaw" alt="Ravenclaw Emblem" ' +
                'style="position:absolute;width: 190px;margin: 10px" ' +
                'src="src/img/ravenclaw.png"/>'
            );
            n = 0;
            return false;
        }
    } else {
        n = 0;
    }
});