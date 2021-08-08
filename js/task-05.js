const userNameOut = document.getElementById('name-output')
const userNameIn = document.getElementById('name-input');

const getUserName = event => {
    const valueName = event.currentTarget.value.trim();
    userNameOut.textContent = valueName ? valueName : 'незнакомец';
}
  
userNameIn.addEventListener('input', getUserName)
