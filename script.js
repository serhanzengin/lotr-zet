document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll("img");

    photos.forEach(function(photo) {
        photo.addEventListener("mouseover", function() {
            photo.style.filter = "blur(3px)";
        });

        photo.addEventListener("mouseout", function() {
            photo.style.filter = "none";
        });

        photo.addEventListener("click", function() {
            const photoInfo = photo.nextElementSibling;
            if (photoInfo.style.display === "block") {
                photoInfo.style.display = "none";
            } else {
                photoInfo.style.display = "block";
            }
        });
    });
});

window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var fullHeight = document.body.scrollHeight;

    if (scrollPosition + windowHeight >= fullHeight) {
        footer.style.bottom = '0'; // Footer'ı göster
    } else {
        footer.style.bottom = '-100px'; // Footer'ı gizle
    }
});
