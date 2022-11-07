const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");
const storageEll = ingredients
  .map(
    (ingredient) =>
      `<li class="item">${ingredient}</li>`
  )
  .join("");



listEl.insertAdjacentHTML("afterbegin", storageEll);
