// menu desplegable
$(".button-collapse").sideNav();
$(document).ready(function(){
  $('.parallax').parallax();
});

// parallax header
// $(document).ready(function(){
//   $('.parallax').parallax();
// });

// slider

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
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3500);
}


// boton arriba

$(document).ready(function(){
	$("#boton-subir").click(function(){
		$("body, html").animate({
			scrollTop: "0px"
		}, 300);
	});
	$(window).scroll(function(){
		if ( $(this).scrollTop() > 640){
			$("#boton-subir").slideDown(300);
		}else{
			$("#boton-subir").slideUp(300);
		}
	});
});