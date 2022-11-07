const inputEl = document.querySelector("#font-size-control");
const spanEL = document.querySelector("#text");

const onChangeFontSize = (event) => {
  spanEL.style.fontSize = event.currentTarget.value + 'px';
};

inputEl.addEventListener("input", onChangeFontSize);
