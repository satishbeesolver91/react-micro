let splideInstance = null;

export function initLightboxSplide() {
  const galleryImages = document.querySelectorAll(".gallery_image");
  const sliderContainer = document.getElementById("lightbox-splide-list");
  const lightbox = document.querySelector(".custom-lightbox");
  const closeButton = document.querySelector(".lightbox-close-modal_link");

  if (!galleryImages.length || !sliderContainer || !lightbox) {
    console.warn("Lightbox DOM not ready");
    return;
  }

  // Cleanup old slides
  sliderContainer.innerHTML = "";

  galleryImages.forEach((image) => {
    const copy = image.cloneNode(true);
    copy.classList.remove("gallery_image");
    copy.classList.add("splide__slide");
    sliderContainer.appendChild(copy);
  });

  // Destroy previous instance
  if (splideInstance) {
    splideInstance.destroy();
  }

  splideInstance = new window.Splide("#main-carousel", {
    heightRatio: 0.5,
    gap: "2rem",
    updateOnMove: true,
  }).mount();

  galleryImages.forEach((image, index) => {
    image.onclick = () => {
      lightbox.style.display = "flex";
      splideInstance.go(index);
    };
  });

  closeButton.onclick = (e) => {
    e.preventDefault();
    lightbox.style.display = "none";
    splideInstance.go(0);
  };
}

export function destroyLightboxSplide() {
  splideInstance?.destroy();
  splideInstance = null;
}