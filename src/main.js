import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';

const refs = {
  formElem: document.querySelector('.form'),
  inputElem: document.querySelector('.input-text'),
  btnInputElem: document.querySelector('.btn'),
  waitElem: document.querySelector('.waiting-text'),
};

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();
  const query = refs.inputElem.value;
  if (query.trim().length < 1) {
    refs.btnInputElem.disabled = true;
    return;
  }
  getImagesByQuery(query).then(data => {
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
      });
    } else {
    }
  });
});
