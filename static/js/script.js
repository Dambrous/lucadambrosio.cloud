var currentUrl = window.location.pathname;

var navbarLinks = document.querySelectorAll('.custom-link');
navbarLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentUrl) {
        link.classList.add('active');
    }
});
