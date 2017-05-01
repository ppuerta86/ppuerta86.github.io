$(document).ready(function(){
    
    
    $("#showMenu").click(function(){
		$("#MovilMenu").addClass("Menu");
	});
     $("#CloseMenu").click(function(){
		$("#MovilMenu").removeClass("Menu");
	});
       $("#CloseHome").click(function(){
		$("#MovilMenu").removeClass("Menu");
	});
    $("#CloseAcerca").click(function(){
		$("#MovilMenu").removeClass("Menu");
	});
    $("#CloseExperiencia").click(function(){
		$("#MovilMenu").removeClass("Menu");
	});
    $("#CloseCurso").click(function(){
		$("#MovilMenu").removeClass("Menu");
	});
    $("#ClosePortafolio").click(function(){
		$("#MovilMenu").removeClass("Menu");
	});
    $("#CloseContacto").click(function(){
		$("#MovilMenu").removeClass("Menu");
	});
    
 
});



smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: false, // Boolean. If true, update the URL hash on scroll
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});
