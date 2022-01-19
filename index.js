


$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
  
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass("show");

        }
        else{
            $('.scroll-up-btn').removeClass("show");

        }
    });
});



    // Slide-up Script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });



// toggle menubar/navbar script

    $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});



// Typing Animation Script
var typed=new Typed(".typing ",{
    strings:["Developer", "Photographer", "Cube Solver" , "Photo Editor", "Video Editor"],
    typeSpeed: 100,
    bacSpeed: 60,
    loop: true
});




var typed=new Typed(".typing-2 ",{
    strings:["Developer", "Photographer", "Cube Solver" , "Photo Editor", "Video Editor"],
    typeSpeed: 100,
    bacSpeed: 60,
    loop: true
});




    // owl carouse1 script

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {

            0: {
                items: 1,
                nav:false
            },

            600: {
                items: 2,
                nav:false
            },

            1000: {
                items: 3,
                nav:false
            },


        }
    });



    function sendEmail(params){
        var tempparams={
            from_name: document.getElementById('fromname').value,
            to_name: document.getElementById('toname').value,
            message: document.getElementById('msg').value


        };

        emailjs.send('service_t801tek', 'template_gmzd089', tempparams)
        .then(function(res){
            console.log("success", res.status);
        })
    }




