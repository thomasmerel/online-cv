var timeout = false;

$(function () {
    new ClipboardJS(".clipboard");
    $('[data-toggle="tooltip"]').tooltip();

    $.scrollify({
        section: ".slide",
    });

    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1100);
            }
        }
    });
});

function copyCp() {
    if(timeout === false) {
        $.notify({
            // options
            message: 'Copied to clipboard'
        },{
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

    setTimeout(function(){
        timeout = false;
    }, 3000);
}