import { doCreator } from './doCreator.js';
import { validation } from './validation.js';

const doInput = document.getElementById('doInput');
const doButton = document.getElementById('doButton');
const error = document.getElementById('error');

doInput.addEventListener('keypress', e => {
    error.innerHTML = ''
    if(e.key == 'Enter') {
        if (e.target.value !== '' && e.target.value.length <= 20) {
            doCreator(e.target.value);
            e.target.value = '';
        } 
        validation(e.target.value, error);
    }
});

doInput.addEventListener('blur', () => {
    error.innerHTML = ''
})

doButton.addEventListener('click', e => {
    validation(doInput.value, error)
    if(doInput.value !== '' && doInput.value <= 20) doCreator(doInput.value);
    doInput.value = '';
});

doButton.addEventListener('blur', () => {
    error.innerHTML = ''
})
