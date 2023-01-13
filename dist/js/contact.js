const scriptURL = 'https://script.google.com/macros/s/AKfycbzk-FneGau5wXJVxLvOtmWpFd120PLuaU30YzFdbs-cx15pzk0cDGWmiQ573rR0iZQx/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
