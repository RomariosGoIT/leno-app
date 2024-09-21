document.addEventListener('DOMContentLoaded', function () {
  // Toggle mobile menu
  document.querySelector('.navbar__mobile-menu-toggle').addEventListener('click', function () {
    document.querySelector('.navbar__mobile-menu-items').classList.toggle('active');
  });
  // Video Modal
  const modal = document.querySelector('#videoModal');
  const videoBtn = document.querySelector('.preview__video-play-button');
  const closeBtn = document.querySelector('.modal__close-btn');
  const videoPlayer = document.getElementById('videoPlayer');
  // Open modal when clicked
  videoBtn.addEventListener('click', function () {
    // Show modal
    modal.style.display = 'block';

    // Replace the src attribute with the video URL
    videoPlayer.src = 'https://www.youtube.com/embed/ImSjJwzqAss?si=dedy78-E6Jd5gliG';

    // Close modal on close button click
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      videoPlayer.src = '';
    });
  });
  //Close modal on outter click
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      videoPlayer.src = '';
    }
  });
});
// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});
