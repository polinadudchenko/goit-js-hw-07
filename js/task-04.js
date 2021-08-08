let currentValue = 0;
const screenValue = document.getElementById('value');

const increment = () => {
    currentValue += 1;
    return screenValue.textContent = currentValue;
}

const decrement = () => {
    if (currentValue === 0) {
        return screenValue.textContent = 0;
    }
    currentValue -= 1;
    screenValue.textContent = currentValue;
}

const btnDecrement = document.querySelector('[data-action="decrement"]')
btnDecrement.addEventListener('click', decrement)

const btnIncrement = document.querySelector('[data-action="increment"]')
btnIncrement.addEventListener('click', increment)