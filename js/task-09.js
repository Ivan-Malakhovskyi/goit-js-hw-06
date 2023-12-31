const selectors = {
  color: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

selectors.btn.addEventListener("click", onChangeBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeBackgroundColor() {
  const changeColor = getRandomHexColor();
  selectors.body.style.backgroundColor = changeColor;
  selectors.color.textContent = changeColor;
}
