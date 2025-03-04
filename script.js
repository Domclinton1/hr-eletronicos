document.addEventListener("DOMContentLoaded", () => {
    iniciarMiniSliders();
    configurarNavegacao();
});

function iniciarMiniSliders() {
    document.querySelectorAll(".slider").forEach(slider => {
        const track = slider.querySelector(".slider-track");
        const images = track.querySelectorAll("img");
        
        // Duplicando imagens para efeito contínuo
        images.forEach(img => {
            const clone = img.cloneNode(true);
            track.appendChild(clone);
        });
    });
}

function configurarNavegacao() {
    const container = document.querySelector(".products-container");
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");

    leftArrow.addEventListener("click", () => {
        container.scrollBy({ left: -300, behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
        container.scrollBy({ left: 300, behavior: "smooth" });
    });
}
