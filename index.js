


$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");

        }
        else {
            $('.scroll-up-btn').removeClass("show");

        }
    });
});







// Slide-up Script
$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    //removing smooth scroll on slide-up button click
    $('html').css("scrollBehaviour", "smooth")
});

$('.navbar .menu li a').click(function () {
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});






// toggle menu/navbar script
$('.container').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.container').toggleClass("active");


});



$('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
})



function myFunction(x) {
    x.classList.toggle("change");
}


function function12(x) {
    $('.container').removeClass("change");
    $('.container').removeClass("active");

}










// Typing Animation Script
var typed = new Typed(".typing ", {
    strings: ["Website Developer", "Website Designer", "Photographer", "Cube Solver", "Photo Editor"],
    typeSpeed: 100,
    bacSpeed: 60,
    loop: true
});




var typed = new Typed(".typing-2 ", {
    strings: ["Website Developer", "Website Designer", "Photographer", "Cube Solver", "Photo Editor"],
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
            nav: false
        },

        600: {
            items: 2,
            nav: false
        },

        1000: {
            items: 3,
            nav: false
        },


    }
});





// Form Submission

function sendEmail() {

    var name = document.getElementById('fromname').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;



    if (name && email && msg != "" && ValidateEmail() == true) {
        var tempparams = {

            from_name: document.getElementById('fromname').value,
            to_name: document.getElementById('email').value,
            message: document.getElementById('msg').value


        };


        alert('Thanks for responding I will get you back!')

        emailjs.send('service_t801tek', 'template_gmzd089', tempparams)
            .then(function (res) {

                console.log("success", res.status);

            })

    }



    else {
        // console.log('Error');
        alert("Please fill all the field with correct Email Address!");

    }


}


function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return (true)
    }
    // alert("You have entered an invalid email address!")
    return (false)
}



// Email Validation







// function sendEmail() {


//     var tempparams = {

//         from_name: document.getElementById('fromname').value,
//         email: document.getElementById('email').value,
//         message: document.getElementById('msg').value


//     };

//     // alert('HI')


//     emailjs.send('service_t801tek', 'template_gmzd089', tempparams)
//         .then(function (res) {
//             // console.log("success", res.status);
//             alert('Thanks for responding I will get you back!', res.status);
//         })


// }









// Welcome Part

const welcome = document.querySelectorAll('#welcome path');


for (let i = 0; i < welcome.length; i++) {
    console.log(`Letter ${i} is ${welcome[i].getTotalLength()}`);
}











// Disappear Welcome Message




function startit() {
    setTimeout(() => {
        $('.navbar').addClass('disappear');
        $('.home').addClass('disappear');
        $('.svg').addClass('disappear');


        $('.text-1').addClass('disappear');
        $('.text-2').addClass('disappear');
        $('.text-3').addClass('disappear');



        console.log('Hi bro');

    }, -1000);

}
setTimeout(() => {


    $('.navbar').removeClass('disappear');
    $('.home').removeClass('disappear');
    $('.svg').addClass('home');



    $('.text-1').removeClass('disappear');
    $('.text-3').removeClass('disappear');


    $('.svg').addClass('.text-2');
    $('.svg').addClass('text-1');
    $('.svg').addClass('text-3');








    // $('text-1').removeClass('disappear');
    // $('text-2').addClass('disappear');




    console.log('bro');

}, 4100);



















// DarkMode & WhiteMode




function darkmode() {


    document.getElementById("whitemode").style.visibility = "visible"
    document.body.style.backgroundColor = "black";


    var darkmode = document.getElementById('body');
    darkmode.style.backgroundColor = 'black';
    darkmode.style.color = 'white'

    var main = document.getElementById('main');
    // main.style.backgroundColor='black';
    main.style.color = 'white';


    var add = document.getElementById('add');
    // add.style.backgroundColor = 'black';
    add.style.color = 'white';

    var EmailIdi = document.getElementById('EmailId');
    // Email.style.backgroundColor = 'Black';
    EmailIdi.style.color = 'white';



    var Emaillogo = document.getElementById('Emaillogo');
    Emaillogo.style.backgroundColor = 'black';
    Emaillogo.style.color = 'crimson';



    // var title=document.querySelectorAll('.about .about-content .right a')
    // title.style.backgroundColor='black';


    var instagram = document.getElementById('instagram');
    instagram.style.color = 'white';

    var github = document.getElementById('github');
    github.style.color = 'white';

    var linkedini = document.getElementById('linkedini');
    linkedini.style.color = 'white';

    var whatsappi = document.getElementById('whatsappi');
    whatsappi.style.backgroundColor = 'Black';
    whatsappi.style.color = 'white';


    var placeholder = document.getElementById('email');
    placeholder.style.color = 'crimson';


    var placeholder2 = document.getElementById('fromname');
    placeholder2.style.color = 'crimson';


    var placeholder3 = document.getElementById('msg');
    placeholder3.style.color = 'crimson';




    document.getElementById("darkmode").style.visibility = "hidden";



}


function whitemode() {

    document.getElementById("whitemode").style.visibility = "hidden"
    document.body.style.backgroundColor = "white"

    document.getElementById("darkmode").style.visibility = "visible"



    var body = document.getElementById('body');
    body.style.color = 'black';


    var Emaillogo = document.getElementById('Emaillogo');
    Emaillogo.style.backgroundColor = 'white';
    Emaillogo.style.color = 'crimson';



    var main = document.getElementById('main');
    main.style.color = 'black';


    var add = document.getElementById('add');
    add.style.color = 'black';

    var EmailIdi = document.getElementById('EmailId');
    EmailIdi.style.color = 'black';




    var instagram = document.getElementById('instagram');
    instagram.style.color = 'black';

    var github = document.getElementById('github');
    github.style.color = 'black';

    var linkedini = document.getElementById('linkedini');
    linkedini.style.color = 'black';

    var whatsappi = document.getElementById('whatsappi');
    whatsappi.style.backgroundColor = 'white';
    whatsappi.style.color = 'black';




    var placeholder = document.getElementById('email');
    placeholder.style.color = 'black';


    var placeholder2 = document.getElementById('fromname');
    placeholder2.style.color = 'black';


    var placeholder3 = document.getElementById('msg');
    placeholder3.style.color = 'black';



}
