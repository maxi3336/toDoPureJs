export const validation = (text, ErrorElement) => {

    if (text === '') ErrorElement.innerHTML = 'Empty input! Please write something.';
    if (text.length > 20) ErrorElement.innerHTML = 'Max symbols is 20!';

}