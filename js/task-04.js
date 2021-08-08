let currentValue = 0;
const screenValue = document.getElementById('value');

const increment = () => {
    return screenValue.textContent = currentValue += 1;
}

const decrement = () => {
    return screenValue.textContent = currentValue ? currentValue -= 1 : 0;
}

const btnDecrement = document.querySelector('[data-action="decrement"]')
btnDecrement.addEventListener('click', decrement)

const btnIncrement = document.querySelector('[data-action="increment"]')
btnIncrement.addEventListener('click', increment)