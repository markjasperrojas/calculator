let screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    screen.value += button.id;
  });
});
