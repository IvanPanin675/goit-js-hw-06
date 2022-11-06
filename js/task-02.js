const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const storageEll = ingredients
  .map;


const listEl = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const itemEL = document.createElement("li");
  itemEL.classList.add("item");
  itemEL.textContent = ingredient;
  return itemEL;
});
listEl.append(...storageEll);
