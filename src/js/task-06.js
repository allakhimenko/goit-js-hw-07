const input = document.querySelector('#validation-input');

function onInputBlur() {
    if (input.value.length < input.dataset.length) {
        input.classList.add('invalid');
    }
    if (input.value.length >= input.dataset.length) {
        input.classList.remove('invalid'); 
        input.classList.add('valid');
    }
};

input.addEventListener('blur', onInputBlur);
