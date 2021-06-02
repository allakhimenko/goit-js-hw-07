const counterValue = document.querySelector('#value');
const increments = document.querySelector('#increment');
const decrements = document.querySelector('#decrement');

let value = 0;

function increment() {
    value +=1;

counterValue.textContent = value;
}

function decrement() {
    value -=1;

counterValue.textContent = value;
}

increments.addEventListener('click', increment);
decrements.addEventListener('click', decrement);