$('.navbar-brand').on('click', function(e){
    e.preventDefault();
});
$(".nav-link").on("click", function(e){
    e.preventDefault();
    // console.log(this.href.slice(this.href.indexOf('#') + 1));
    const id = this.href.slice(this.href.indexOf('#') + 1);
    $([document.documentElement, document.body]).animate({
        scrollTop: $(`#${id}`).offset().top
    },100);
});