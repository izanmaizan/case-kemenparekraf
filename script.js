var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slider-image");
    for (i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    x[slideIndex - 1].style.opacity = "1";
    setTimeout(carousel, 2000); // Ubah durasi slide di sini (dalam milidetik)
}

// JavaScript code for smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    var scrollLinks = document.querySelectorAll('nav a');

    for (var i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href');
        var targetPosition = document.querySelector(targetId).offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var duration = 800; // Durasi scrolling dalam milidetik
        var startTime = null;

        function scrollAnimation(currentTime) {
            if (startTime === null) {
                startTime = currentTime;
            }

            var timeElapsed = currentTime - startTime;
            var scrollY = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, scrollY);

            if (timeElapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollAnimation);
    }
});