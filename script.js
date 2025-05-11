const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".image-grid img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});