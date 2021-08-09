const inputEl = document.getElementById('validation-input');
function getValueLength(event) {
    const defaultValue = Number(inputEl.getAttribute('data-length'));
    const valueLength = event.currentTarget.value.length;
    if (valueLength === defaultValue) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
       inputEl.classList.remove('valid') 
    }
}

inputEl.addEventListener('change', getValueLength)