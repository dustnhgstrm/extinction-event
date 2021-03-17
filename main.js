//the following code - causes line-through on first list items.

const orderElement = document.querySelectorAll("ol>li");
for (const dino of orderElement) {
  dino.addEventListener("click", (event) => {
    const clickedDino = event.target;
    clickedDino.style.textDecoration = "line-through";
  });
}

//the following code - causes next list items to disappear.

const listDinos = document.querySelectorAll("ul>li");
for (const dino of listDinos) {
  dino.addEventListener("click", (event) => {
    const moreClickedDinos = event.target;
    moreClickedDinos.classList.add("extinction");
  });
}

//the following code - causes the dino images to disappear.

const dinoPics = document.querySelectorAll("img");
for (const dino of dinoPics) {
  dino.addEventListener("click", (event) => {
    console.log("event:", event);
    const clickPicsDino = event.target;
    clickPicsDino.classList.add("dieting");
  });
}

//the following code - gives button ability to cause all effects simultaneously.

const redButton = document.querySelector("#destroy-all");
redButton.addEventListener("click", () => {
  for (const dinos of dinoPics) {
    dinos.classList.add("dieting");
  }
  for (const dino of orderElement) {
    dino.style.textDecoration = "line-through";
  }
  for (const dinoss of listDinos) {
    dinoss.classList.add("extinction");
  }
});
