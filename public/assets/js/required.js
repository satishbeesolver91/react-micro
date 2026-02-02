document.addEventListener("DOMContentLoaded", function () {
        var splideListId = "lightbox-splide-list";
        var galleryImages = document.querySelectorAll(".gallery_image");
        var sliderContainer = document.getElementById(splideListId);
        var lightbox = document.querySelector(".custom-lightbox");
        var closeButton = document.querySelector(".lightbox-close-modal_link");
        var splide;
        function initializeSplide() {
          console.log("Initializing Splide...");
          if (splide) {
            splide.destroy(); // Destroy previous instance of Splide if it exists
          }
          splide = new Splide('#main-carousel', {
            heightRatio: 0.5,
            gap: "2rem",
            updateOnMove: true,
          }).mount();
        }
        function prepDomForLightboxSplide(images) {
          console.log("Preparing DOM for Splide...");
          images.forEach(function (image) {
            let imageCopy = image.cloneNode(true);
            imageCopy.classList.remove("gallery_image");
            imageCopy.classList.add("splide__slide");
            if (sliderContainer) {
              sliderContainer.appendChild(imageCopy);
            }
          });
        }
        function connectImagesToSplideIndex(image, position) {
          console.log("Setting up click listener for gallery image");
          image.addEventListener("click", function () {
            console.log("Gallery image clicked, opening lightbox");
            lightbox.classList.add("visible");
            lightbox.style.display = "block"; // Ensure display is set to block
            splide.go(position);
          });
        }
        function setupLightbox() {
          prepDomForLightboxSplide(galleryImages);
          initializeSplide();
          galleryImages.forEach((image, index) => connectImagesToSplideIndex(image, index));
          closeButton.addEventListener("click", function (event) {
            console.log("Close button clicked");
            event.preventDefault();
            lightbox.classList.remove("visible");
            lightbox.style.display = "none"; // Ensure display is set to none
            // Ensure Splide is reset or behaves correctly
            splide.go(0); // Optional: Reset slider to first slide or desired position
          });
          lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
              console.log("Lightbox background clicked");
              lightbox.classList.remove("visible");
              lightbox.style.display = "none"; // Ensure display is set to none
            }
          });
        }
        setupLightbox();
        console.log("Lightbox setup completed.");
      });


      $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            $('.custom-lightbox').hide();
        }
      });

    // END Esc to close custom lightbox


      function getCookie(name) {
        const cookies = document.cookie.split('; ');
        for (let cookie of cookies) {
          const [cookieName, cookieValue] = cookie.split('=');
          if (cookieName === name) {
            return decodeURIComponent(cookieValue);
          }
        }
        return null;
      }
      const sourceCookie = getCookie('source') ? getCookie('source') : '';
      if (sourceCookie.length > 0) {
        window.crmAttribution.addDefaultSource({ source: sourceCookie })
      }
