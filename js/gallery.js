const START_SLIDE = 0;

var allImages = document.querySelectorAll('.wide-container img');
var allThumbs = document.querySelectorAll('.row img.thumb');

var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');

var numberBox = document.querySelector('.wide-container .numbertext');
var captionBox = document.querySelector('.wide-container .caption-container');

var activeSlide = START_SLIDE;

//------------------------------------------------------------------------------

function showSlide(index) {

  // hide old image
  allImages[activeSlide].classList.remove('active');
  // hide old thumb
  allThumbs[activeSlide].classList.remove('active');

  // set new index
  activeSlide = index;

  // range check (up / down)
  if (activeSlide > allImages.length - 1) activeSlide = 0;
  if (activeSlide < 0) activeSlide = allImages.length - 1;

  // show new active slide
  allImages[activeSlide].classList.add('active');
  // activate Thumbnail
  allThumbs[activeSlide].classList.add('active');
  // show numbertext
  numberBox.innerHTML = (activeSlide + 1) + ' / ' + allImages.length;
  // show Caption
  captionBox.innerHTML = allImages[activeSlide].getAttribute('data-caption');

}

//------------------------------------------------------------------------------

nextButton.addEventListener('click', function() {
  showSlide( activeSlide + 1 );
});

prevButton.addEventListener('click', function() {
  showSlide( activeSlide - 1 );
});

for (var i = 0; i < allThumbs.length; i++) {
  allThumbs[i].addEventListener('click', function(evt) {
    var index = parseInt(evt.target.getAttribute('data-index'));
    showSlide(index);
  });
}

//------------------------------------------------------------------------------

showSlide(START_SLIDE);
