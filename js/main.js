$(document).ready(function(){
    
    var nav = $('.navbar-fixed-top');
    
        var distancia = $('.navbar-fixed-top').offset();
    
        if (distancia.top > 0) {
            nav.removeClass('normal').addClass('efecto'); 
        }
    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 300) {
            nav.removeClass('normal').addClass('efecto');
        } else {
            nav.removeClass('efecto').addClass('normal');
        }
        
    });
    
    
    
    $('section#pantallas a').on('click',function(){
        $('#modal img').attr('src',$(this).attr('data-image-url'));
    });
    
    $('section#app .anima1').waypoint(function() {
        
        $('section#app .anima1').addClass('animated fadeInUp');
        
    }, {
        offset: '60%'
        
    });
    
       $('section#app .anima2').waypoint(function() {
        
        $('section#app .anima2').addClass('animated fadeInUp');
    }, {
        offset: '60%'
        
    });
    
    $('section#app .anima3').waypoint(function() {
        
        $('section#app .anima3').addClass('animated fadeInUp');
    }, {
        offset: '60%'
        
    });
    
      $('section#caracteristicas #appCentral').waypoint(function() {
        
        $('section#caracteristicas #appCentral').addClass('animated fadeInDownBig');
    }, {
        offset: '60%'
        
    });
    
     $('section#caracteristicas .anima1').waypoint(function() {
        
        $(this).addClass('animated fadeInLeft');
           
    }, {
        offset: '60%'
        
    });
    
     $('section#caracteristicas .anima2').waypoint(function() {
        
        $(this).addClass('animated fadeInLeft');
           
    }, {
        offset: '60%'
        
    });
    
     $('section#pantallas .anima1').waypoint(function() {
        
        $(this).addClass('animated fadeInRight');
           
    }, {
        offset: '60%'
        
    });
     $('section#pantallas .anima2').waypoint(function() {
        
        $(this).addClass('animated fadeInRight');
           
    }, {
        offset: '60%'
        
    });
     $('section#pantallas .anima3').waypoint(function() {
        
        $(this).addClass('animated fadeInRight');
           
    }, {
        offset: '60%'
        
    });
    
     $('section#descargar .anima1').waypoint(function() {
        
        $(this).addClass('animated fadeInRight');
           
    }, {
        offset: '60%'
        
    });
            $('section#descargar .anima2').waypoint(function() {
        
        $(this).addClass('animated fadeInRight');
           
    }, {
        offset: '60%'
        
    });
            $('section#descargar .anima3').waypoint(function() {
        
        $(this).addClass('animated fadeInRight');
           
    }, {
        offset: '60%'
        
    });
    
    
});

smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 900, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: false, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});
