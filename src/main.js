import { doCreator } from './doCreator.js';
import { validation } from './validation.js';

const doInput = document.getElementById('doInput');
const addButton = document.getElementById('addButton');
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

addButton.addEventListener('click', e => {
    error.innerHTML = ''
    if(doInput.value !== '' && doInput.value.length <= 20) {
        doCreator(doInput.value)
        doInput.value = ''
    }
    validation(doInput.value, error)
});

doButton.addEventListener('blur', () => {
    error.innerHTML = ''
})
