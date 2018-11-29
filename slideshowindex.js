var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// fade in border
//<script type="text/javascript" src="js/jquery-1.2.6.min.js"></script>
//<script type="text/javascript">
	//$(function(){
		//$(".home").hover(function(){
			//$(".edge").stop().fadeIn();
	//	}, function() {
		//	$(".edge").stop().fadeOut();
//		});
	//});
//</script>