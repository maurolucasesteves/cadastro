const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.star-rating');
let currentRating = 0;

stars.forEach((star) => {
  star.addEventListener('click', function() {
    currentRating = parseInt(this.getAttribute('data-value'));
    rating.setAttribute('data-rating', currentRating);
    updateStars();
  });
});

function updateStars() {
  stars.forEach((star) => {
    const starValue = parseInt(star.getAttribute('data-value'));
    if (starValue <= currentRating) {
      star.classList.add('selected');
    } else {
      star.classList.remove('selected');
    }
  });
}
