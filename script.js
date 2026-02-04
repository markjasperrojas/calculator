function deleteHandle() {
  let newValue = screen.value.split("");
  newValue.pop();
  screen.value = newValue.join("");
}

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.value += button.id;
  });
});

clearBtn.addEventListener("click", () => {
  screen.value = "";
});

deleteBtn.addEventListener("click", deleteHandle);
