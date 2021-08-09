const refs = {
    boxesEl: document.getElementById('boxes'),
    inputValue: document.querySelector('input'),
    createBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]')
}

let size = 30;

function getAmount() {
    const amount = refs.inputValue.value;
    createBoxes(amount);
}

function createBoxes(amount) {
    
    const boxes = [];
    for (let i = 0; i < amount; i++){
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        boxes.push(box);
        size += 10;
    }
    refs.boxesEl.append(...boxes);
    size = Number(refs.boxesEl.lastElementChild.clientWidth) + 10;
}

function destroyBoxes() {
    refs.boxesEl.innerHTML = '';
    size = 30;
}

refs.createBtn.addEventListener('click', getAmount);
refs.destroyBtn.addEventListener('click', destroyBoxes);