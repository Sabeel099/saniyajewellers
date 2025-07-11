
function previewLogo(input, previewId) {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    document.getElementById(previewId).style.backgroundImage = `url('${e.target.result}')`;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}



let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const totalSlides = slides.length;
let slideTimer;

function showSlide(index) {
  // Ensure index is within bounds
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;

  // Hide all slides
  for (let i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  // Show current slide
  slides[slideIndex].style.display = "block";
}

// Auto slideshow every 3 seconds
function startAutoSlide() {
  slideTimer = setInterval(() => {
    slideIndex++;
    if (slideIndex >= totalSlides) slideIndex = 0;
    showSlide(slideIndex);
  }, 3000);
}

// Manual control (with arrow buttons)
function plusSlides(n) {
  clearInterval(slideTimer); // Pause auto
  slideIndex += n;
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;
  showSlide(slideIndex);
  startAutoSlide(); // Resume auto
}

// Start the slideshow
window.onload = () => {
  showSlide(slideIndex);
  startAutoSlide();
};


document.addEventListener("DOMContentLoaded", () => {
  showSlidesAuto(); // Start on page load
});


document.addEventListener("DOMContentLoaded", showSlides);



        // Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate rate cards on scroll
            const rateCards = document.querySelectorAll('.rate-card');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'slideIn 0.6s ease-out';
                    }
                });
            }, { threshold: 0.1 });
            
            rateCards.forEach(card => {
                observer.observe(card);
            });
            
            // Add random price fluctuation simulation
            function simulatePriceUpdate() {
                const prices = document.querySelectorAll('.rate-price');
                prices.forEach(price => {
                    const currentPrice = price.textContent;
                    price.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        price.style.transform = 'scale(1)';
                    }, 200);
                });
            }
            
            // Simulate price updates every 30 seconds
            setInterval(simulatePriceUpdate, 30000);
        });
    