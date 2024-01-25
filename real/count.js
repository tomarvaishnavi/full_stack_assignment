$(document).ready(function(){
    
    function animateCounters() {
        $('.counter').each(function () {
            var $this = $(this);
            var target = $this.data('target');

            $({ Counter: 0 }).animate({ Counter: target }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }

    // Run the counter animation when the element is in the viewport
    $(window).on('scroll', function () {
        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var elementOffsetTop = $('.counter').offset().top;

        if (windowScrollTop + windowHeight > elementOffsetTop) {
            animateCounters();
        }
    });

    // Alternatively, you can trigger the counter animation when the document is ready
    // $(document).ready(function () {
    //     animateCounters();
    // });

$('.slideInUp').waypoint(function(direction) {
    //console.log(this.id);
    myfunc_fadeInDown(this.element, direction); //when using waypoint, this refers to the waypoint object
},{offset:'90%'});

// $('#fade_in_left').waypoint(function(direction) {
//     myfunc_fadeInLeft(this.element, direction);
// },{offset:'10%'});

$('.fadeInLeft').waypoint(function(direction) {
    myfunc_fadeInLeft(this.element, direction);
},{offset:'80%'});

$('#slide_in_up').waypoint(function(direction) {
    myfunc_slideInUp(this.element, direction);
},{offset:'10%'});

$('.slideInRight').waypoint(function(direction) {
    myfunc_slideInRight(this.element, direction);
},{offset:'80%'});


function myfunc_fadeInDown(target, direction){
    console.log(target);
    if(direction === "down"){
        $(".slideInUp").addClass("animate__animated animate__slideInUp");
  
        setTimeout(function(){
            $(".slideInUp").removeClass("animate__animated animate__slideInUp");
            $(".slideInUp").removeClass("hidden");
    }, 1000);
    }
}

function myfunc_slideInRight(target, direction){

    if(direction === "down"){
        $(".slideInRight").removeClass("hidden");
        $(".slideInRight").addClass("animate__animated animate__slideInRight");

        setTimeout(function(){
            $(".slideInRight").removeClass("animate__animated animate__slideInRight");
  }, 1000);
    }
}

function myfunc_fadeInLeft(target, direction){
    if(direction === "down"){
       
        $('.fadeInLeft').addClass("animate__animated animate__fadeInLeft");

        setTimeout(function(){
            $('.fadeInLeft').removeClass("animate__animated animate__fadeInLeft");
            $('.fadeInLeft').removeClass("hidden");
    }, 1000);
    }
}

// function myfunc_slideInUp(target, direction){
//     if(direction === "down"){
//         $(target).removeClass("hidden");
//         $(target).addClass("animated slideInUp");
//         setTimeout(function(){
//             $(target).removeClass("animated slideInUp");
//         }, 1000);
//     }
// }

function myfunc_zoomIn(target, direction){
    if(direction === "down"){
        $(target).removeClass("hidden");
        $(target).addClass("animated zoomIn");
        setTimeout(function(){
            $(target).removeClass("animated zoomIn");
    }, 1000);
    }
}



 });
