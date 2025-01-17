const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function initMap(){
    var location = {lat: 45.631910, lng: -73.831410};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Slider
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".main__slide");
    let currentIndex = 0;
    const prevBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Auto slide every 3 seconds
    setInterval(nextSlide, 3000);

    showSlide(currentIndex);
});
