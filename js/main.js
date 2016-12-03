$(".button-collapse").sideNav();
$(document).ready(function(){
  $('.parallax').parallax();
});

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.querySelectorAll(".heading div h1");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
  $(x[slideIndex-1]).fadeIn();
    setTimeout(carousel, 5000);
}


// boton arriba 

$(document).ready(function(){
	$("#boton-subir").click(function(){
		$("body, html").animate({
			scrollTop: "0px"
		}, 300);
	});
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 610){
			$("#boton-subir").slideDown(300);
		}else{
			$("#boton-subir").slideUp(300);
		}
	});
});

var array = [$("a[href*=#sobre-mi]"), $("a[href*=#herramientas]"), $("a[href*=#portafolio]"), $("a[href*=#contacto]")];

for (var i=0; i <= array.length; i++) {
	$(array[i]).click(function(){
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
     	if ($target.length) {
	      var targetOffset = $target.offset().top;
	      $('html,body').animate({scrollTop: targetOffset}, 1000);
	      return false;
    	}
		}
	});
}
