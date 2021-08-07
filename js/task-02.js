const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const categories = [];
ingredients.forEach(ingredient => {
  const catEl = document.createElement('li');
  catEl.textContent = ingredient;
  categories.push(catEl);
})

const insert = document.getElementById('ingredients');
insert.textContent = 'Ингредиенты:'
insert.append(...categories);

