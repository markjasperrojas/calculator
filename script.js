function reset() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  hasOperator = false;
}

function deleteHandle(str) {
  let newStr = str.split("");
  newStr.pop();
  str = newStr.join("");
  return str;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  return operator === "+"
    ? add(a, b)
    : operator === "-"
      ? subtract(a, b)
      : operator === "x"
        ? multiply(a, b)
        : divide(a, b);
}

function secondOperate() {
  if (operator === "/" && firstNumber === "0" && secondNumber === "0") {
    screen.value = "Result is undefined";
    reset();
    return;
  }

  if (operator === "/" && secondNumber === "0") {
    screen.value = "Cannot divide by 0";
    reset();
    return;
  }

  firstNumber = Number(
    operate(Number(firstNumber), Number(secondNumber), operator).toFixed(3),
  ).toString();
  secondNumber = "";
  screen.value = firstNumber;
}

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("equal");
const dotBtn = document.getElementById("dot");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let hasOperator = false;
let hasDot = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!hasOperator) {
      firstNumber += button.id;
      screen.value = firstNumber;
    } else if (hasOperator) {
      secondNumber += button.id;
      screen.value = secondNumber;
    }
  });
});

clearBtn.addEventListener("click", () => {
  reset();
  screen.value = "";
});

deleteBtn.addEventListener("click", () => {
  if (!hasOperator) {
    firstNumber = deleteHandle(firstNumber);
    screen.value = firstNumber;
  } else if (hasOperator) {
    secondNumber = deleteHandle(secondNumber);
    screen.value = secondNumber;
  }
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      firstNumber.length !== 0 &&
      secondNumber.length !== 0 &&
      operator.length !== 0
    ) {
      secondOperate();
      operator = button.value;
    }

    if (hasOperator || firstNumber.length === 0) return;

    hasOperator = true;
    operator = button.value;
  });
});

equalBtn.addEventListener("click", () => {
  if (
    firstNumber.length === 0 ||
    secondNumber.length === 0 ||
    operator.length === 0
  )
    return;

  hasOperator = false;
  secondOperate();
  reset();
});

dotBtn.addEventListener("click", () => {
  if (!hasOperator && firstNumber.length === 0) {
    firstNumber += "0.";
    screen.value = firstNumber;
  } else if (hasOperator && secondNumber.length === 0) {
    secondNumber += "0.";
    screen.value = secondNumber;
  }

  if (!hasOperator && !firstNumber.includes(".")) {
    firstNumber += ".";
    screen.value = firstNumber;
  } else if (hasOperator && !secondNumber.includes(".")) {
    secondNumber += ".";
    screen.value = secondNumber;
  }
});
