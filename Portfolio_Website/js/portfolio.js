// Dave Defourneaux
// dave.defourneaux@gmail.com
// github.com/dd4no

// Open and close form
function openForm() {
    document.getElementById("form").style.display = "block";
}
function closeForm() {
    document.getElementById("form").style.display = "none";
}

// Slideshow
var slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if ( n > slides.length ) {slideIndex = 1}
    if ( n < 1 ) {slideIndex = slides.length}
    for ( i=0; i<slides.length; i++ ) {
        slides[i].style.display = "none";
    }
    for ( i=0; i< dots.length; i++ ) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}