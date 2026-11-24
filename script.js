function openImage(image) {
    document.getElementById("large-image").src = image.src;
    document.getElementById("large-image").alt = image.alt;
    document.getElementById("lightbox").style.display = "flex";
}
function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") closeImage();
});
