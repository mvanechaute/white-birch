var navButton = document.querySelector('.reviews .button');

navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classList
    .toggle('form-open');
});

var closeButton = document.querySelector('.reviews .button');

closeButton.addEventListener('click', function() {
  console.log('closed!!!');
  document
    .querySelector('body')
    .classList
    .toggle('form-open');
});