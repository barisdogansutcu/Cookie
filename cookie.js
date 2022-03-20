$(document).ready(function(){
    if (localStorage.getItem('tsoft-cookie-policy') != 'approve') {
        setTimeout(function(){
            $('.tsoft-cookie').addClass('tsoft-cookie-animate');
        },2000);
    }
    if (localStorage.getItem('tsoft-cookie-policy') == 'approve') {
        $('.tsoft-cookie').addClass('approve');
        $('.tsoft-cookie').removeClass('not-approved');
        $('.tsoft-cookie').removeClass('tsoft-cookie-animate');
    }
    if (localStorage.getItem('tsoft-cookie-policy') == 'not-approved') {
        $('.tsoft-cookie').addClass('not-approved');
    }
    $('.tsoft-cookie-policy-arrow-close , .tsoft-cookie-policy-approve').click(function(){
        $(this).closest('.tsoft-cookie').addClass('hide-cookie');
    });
    $('.tsoft-cookie-link-details').click(function(){
        $('.tsoft-cookie-policy-details').slideToggle();
    });
});