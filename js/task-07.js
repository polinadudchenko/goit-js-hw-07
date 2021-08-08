const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

function changeFontSize(event){
    const value = event.currentTarget.value;
    spanEl.style.fontSize = `${value}px`;
}

inputEl.addEventListener('input', changeFontSize)