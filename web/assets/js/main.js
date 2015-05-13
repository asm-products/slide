var currentSlide, slide, slideInterval, start, timer, totalSlides;

timer = null;

currentSlide = 1;

totalSlides = 2;

slideInterval = 10000;

start = function() {
  return timer = setTimeout(slide, slideInterval);
};

slide = function(up) {
  if (up == null) {
    up = true;
  }
  console.log('Slide!');
  document.getElementById('imgbox_' + currentSlide).style.display = 'none';
  document.getElementById('imgcontent_' + currentSlide).style.display = 'none';
  document.getElementById('imgdot_' + currentSlide).className = '';
  if (up) {
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    }
  } else {
    currentSlide--;
    if (currentSlide < 1) {
      currentSlide = totalSlides;
    }
  }
  document.getElementById('imgbox_' + currentSlide).style.display = 'block';
  document.getElementById('imgcontent_' + currentSlide).style.display = 'block';
  document.getElementById('imgdot_' + currentSlide).className = 'active';
  return timer = setTimeout(slide, slideInterval);
};
