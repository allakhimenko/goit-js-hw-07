"use strict";

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//const ul = document.querySelector('#ingredients');

//ingredients.forEach(ingredient => {
//    const li = document.createElement('li');
//    li.textContent = ingredient;
//    ul.appendChild(li)
//});

//console.log(ul);

const ul = document.querySelector('#ingredients');
let box = new DocumentFragment();

ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    box.appendChild(li);
});

ul.append(box);
