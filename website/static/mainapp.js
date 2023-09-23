const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Highlighted change: Stop observing the element after it appears once
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//-----------------------------------------------------------------------------//



var fixedElement = document.querySelector('.socials');
var otherElement = document.querySelector('.black');

function handleScroll() {
  var fixedRect = fixedElement.getBoundingClientRect();
  var otherRect = otherElement.getBoundingClientRect();
  
  // Check if the elements are touching or intersecting
  if (fixedRect.bottom >= otherRect.top) {
    fixedElement.classList.add('temporary-filter');
  } else {
    fixedElement.classList.remove('temporary-filter');
  }
}

// Attach the scroll event listener or use intersection observers
//window.addEventListener('scroll', handleScroll)

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// text part :) ----------------------------------------------------------------

let slideTextIndex = 1;
showTextSlides(slideTextIndex);

// Next/previous controls
function plusTextSlides(z) {
  showTextSlides(slideTextIndex += z);
}

// Thumbnail image controls
function currentTextSlide(z) {
  showTextSlides(slideTextIndex = z);
}

function showTextSlides(z) {
  let o;
  let slidesText = document.getElementsByClassName("myTextSlides");
  if (z > slidesText.length) {slideTextIndex = 1}
  if (z < 1) {slideTextIndex = slidesText.length}
  for (o = 0; o < slidesText.length; o++) {
    slidesText[o].style.display = "none";
  }

  slidesText[slideTextIndex-1].style.display = "block";
}


//-------------------------------------------
//const maxPixelSize = 1328;

for (let i = maxPixelSize; i >= 1; i--) {
  const mediaQuery = window.matchMedia(`(max-width: ${i}px)`);
  mediaQuery.addListener(handleMediaQueryChange);
}

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    const width = mediaQuery.media.match(/\d+/)[0];
    document.querySelector('.background').style.width = `${width}px`;
  }
}
