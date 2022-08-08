$(window).ready(function(e){

    // navigation links //
    $('.navbar-brand').on('click', function(e){
        e.preventDefault();
    });

    $(".nav-link").on("click", function(e){
        e.preventDefault();
        const id = this.href.slice(this.href.indexOf('#') + 1);
        $(document.documentElement).scrollTop($(`#${id}`).offset().top);
    });

    // gallery links //
    $('.img-gallery-link').on('click', function(e){
        e.preventDefault();
        // console.log(e.target.getAttribute('src'));
        $('#modal-image').attr('src', e.target.getAttribute('src'));
        $('#gallery-modal').modal()
    });
})
