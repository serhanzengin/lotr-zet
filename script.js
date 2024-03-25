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


