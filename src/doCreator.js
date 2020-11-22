import { doElements } from './doElements.js';
import { createElement } from './createElement.js'
 
export const doCreator = content => {
    const doList = document.getElementById('doList');
    const id = Math.random();
    createElement(doList, id, content);
    const doElement = doElements(id);

    doElement.doCheckbox.addEventListener('click', () => {
        doElement.doCheckbox.innerHTML = doElement.doCheckbox.textContent == 'check_box' ? 'check_box_outline_blank' : 'check_box';
        doElement.doContent.innerHTML = doElement.doCheckbox.textContent == 'check_box' ? `<strike class="text-muted">${content}</strike>` : `${content}`;
    });

    doElement.doDelete.addEventListener('click', () => {
        doElement.doElement.parentNode.removeChild(doElement.doElement);
    });
    
    doElement.doEdit.addEventListener('click', () => {
        doElement.doContent.innerHTML = `<input id="do-content-input-${id}" value=${content} autofocus>`;
        const doContentInput = document.getElementById(`do-content-input-${id}`);
        doContentInput.addEventListener('keypress', e => {
            content = e.target.value;
            if(e.key == 'Enter' && e.target.value !== '') {
                doElement.doContent.innerHTML = doElement.doCheckbox.textContent == 'check_box' 
                    ? `<strike class="text-muted">${content}</strike>` 
                    : `${content}`;
            };
        });
    });
}