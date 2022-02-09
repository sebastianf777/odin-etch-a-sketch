const grid = document.getElementById("grid_container");
const reset_button = document.getElementById("reset");
let grid_children;

let color_value;
let mouse_state = false;
let mouse_down = false;
//first the initial loop to load the default grid
for (let i = 0; i < 256; i++) {
  let div_grid = document.createElement("div");
  div_grid.classList.add("color");
  grid.appendChild(div_grid);
  grid_children = document.querySelectorAll(".color");
  div_grid.addEventListener("dragstart", (e) => {
    e.preventDefault();
  });
}

//while mouse down and up to get functions working

// sketch modes
// -black mode
document.addEventListener("mousedown", (e) => {
  mouse_down = true;
  if (e.target.classList.contains("color") && mouse_down == true) {
    mouse_state = true;
    color_value = "black";
    e.target.style = `background-color: ${color_value}`;
  }
});
document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("color") && mouse_down == true) {
    if (mouse_state == true) {
      e.target.style = `background-color: ${color_value}`;
    }
  }
});
document.addEventListener("mouseup", () => {
  mouse_state = false;
  mouse_down = false;
});

//The reset when the mouse leaves the grid zone
grid.addEventListener("mouseleave", () => {
  mouse_state = false;
  mouse_down = false;
});

//RESET BUTTON
reset_button.addEventListener("click", () => {
  grid_children.forEach((element) => {
      color_value = 'white'
    element.style = `background-color: ${color_value}`;
  });
});
// reset.addEventListener('click', ()=>{

// })

// function initial_grid() {
//     grid.
// }
