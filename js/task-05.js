const refs = {
    input: document.querySelector('#name-input'),
    userName: document.querySelector('#name-output')
}

function onInputChange() {
    if (refs.input.value === '') {
        refs.userName.innerHTML = 'незнакомец';
    }
    else refs.userName.textContent = refs.input.value;
}

refs.input.addEventListener('input', onInputChange);