const inputEl = document.getElementById('validation-input');
function getValueLength(event) {
    const defaultValue = inputEl.getAttribute('data-length')
    const valueLength = event.currentTarget.value.length;
    if (valueLength > defaultValue) {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    } else {
        inputEl.classList.add('valid')
       inputEl.classList.remove('invalid') 
    }
}

inputEl.addEventListener('change', getValueLength)