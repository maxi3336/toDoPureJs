export const doElements = (id) => ({
    doElement: document.getElementById(`do-element-${id}`),
    doCheckbox: document.getElementById(`do-checkbox-${id}`),
    doContent: document.getElementById(`do-content-${id}`),
    doDelete: document.getElementById(`do-delete-${id}`),
    doEdit: document.getElementById(`do-edit-${id}`)
})