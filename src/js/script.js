var timeout = false;

$(function () {
    new ClipboardJS(".clipboard");
    $('[data-toggle="tooltip"]').tooltip();
});

$.scrollify({
    section: ".slide",
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