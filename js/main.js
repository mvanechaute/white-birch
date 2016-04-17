var navButton = document.querySelector('.review-button');

navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('.js')
    .classList
    .add('form-open');
});

var closeButton = document.querySelector('.close-icon');

closeButton.addEventListener('click', function() {
  console.log('closed!!!');
  document
    .querySelector('.js')
    .classList
    .remove('form-open');
});