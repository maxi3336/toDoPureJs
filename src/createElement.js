export const createElement = (element, id, content) => {
    element.insertAdjacentHTML('beforeend', `<div id="do-element-${id}" class="d-flex w-75 align-items-center m-2">
                                                <span id="do-checkbox-${id}" class="btn material-icons" >check_box_outline_blank</span>
                                                <span id="do-content-${id}" class="text-primary w-100 text-center">${content}</span>
                                                <span id="do-delete-${id}" class="btn text-danger material-icons">delete</span>
                                                <span id="do-edit-${id}" class="btn text-primary material-icons">create</span>
                                            </div>`);
}