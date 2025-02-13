const button = document.querySelector("#clickme");

button.onclick = function () {
  console.log("Button clicked");
};

const scream = () => {
  console.log("Mouse over");
};

button.onmouseover = scream;

const eventbtn = document.querySelector("#eventbtn");
eventbtn.addEventListener("click", stepSatu);
eventbtn.addEventListener("click", stepDua);

function stepSatu() {
  console.log("step satu");
}

function stepDua() {
  console.log("step dua");
}

// eventbtn.onclick = stepSatu;
// eventbtn.onclick = stepDua;
