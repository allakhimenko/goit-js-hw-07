const refs = {
    input: document.querySelector('#name-input'),
    userName: document.querySelector('#name-output')
}

function onInputChange() {
    refs.userName.textContent = refs.input.value;
}

refs.input.addEventListener('input', onInputChange);