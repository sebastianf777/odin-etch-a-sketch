const grid = document.getElementById("grid_container");
const reset_button = document.getElementById("reset");
const color_selection = document.getElementById("color_selection");
const random_color = document.getElementById("random");
const multicolor_button = document.getElementById('multicolor')
const eraser = document.getElementById('eraser')
let grid_size = 256;
let grid_children;
let random_value;
let color_value = "black";
let mouse_state = false;
let multicolor_mode = false;
//first the initial loop to load the default grid
for (let i = 0; i < grid_size; i++) {
  let div_grid = document.createElement("div");
  div_grid.classList.add("color");
  grid.appendChild(div_grid);
  grid_children = document.querySelectorAll(".color");
  div_grid.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
}

//while mouse down and over to get functions working

// sketch modes
// -black mode
document.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("color") && multicolor_mode == false) {
    mouse_state = true;
    e.target.style = `background-color: ${color_value}`;
  } else if (e.target.classList.contains("color") && multicolor_mode == true) {
    mouse_state = true;
    random_value = Math.floor(Math.random() * 16777215).toString(16);
    color_value = `#${random_value}`;
    e.target.style = `background-color: ${color_value}`;
  }
});
document.addEventListener("mouseover", (e) => {
  if (
    e.target.classList.contains("color") &&
    multicolor_mode == false &&
    mouse_state == true
  ) {
    e.target.style = `background-color: ${color_value}`;
  } else if (
    e.target.classList.contains("color") &&
    multicolor_mode == true &&
    mouse_state == true
  ) {
    random_value = Math.floor(Math.random() * 16777215).toString(16);
    color_value = `#${random_value}`;
    e.target.style = `background-color: ${color_value}`;
  }
});
document.addEventListener("mouseup", () => {
  mouse_state = false;
});

//The reset when the mouse leaves the grid zone
grid.addEventListener("mouseleave", () => {
  mouse_state = false;
});

//RESET BUTTON
reset_button.addEventListener("click", () => {
  grid_children.forEach((element) => {
    multicolor_mode = false

    color_value = "white";
    element.style = `background-color: ${color_value}`;
    color_value = "black";
  });
});

//COLOR SELECTION BUTTON
color_selection.addEventListener(
  "input",
  () => {
    multicolor_mode = false
    color_value = color_selection.value;
  },
  false
);
//ERASER BUTTON

eraser.addEventListener('click', ()=> {
  multicolor_mode = false
  color_value = 'white'
})
// RANDOM COLOR BUTTON
random_color.addEventListener("click", () => {
  multicolor_mode = false
  random_value = Math.floor(Math.random() * 16777215).toString(16);
  color_value = `#${random_value}`;
});

//MULTICOLOR MODE BUTTON
multicolor_button.addEventListener('click', () => {
  multicolor_mode = true
})

