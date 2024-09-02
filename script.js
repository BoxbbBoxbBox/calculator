let firstNumber = 0;
let operator = "";
let secondNumber = 0;

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "I don't think so";
  } else {
    return a / b;
  }
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return addition(firstNumber, secondNumber);
    case "-":
      return subtraction(firstNumber, secondNumber);
    case "*":
      return multiplication(firstNumber, secondNumber);
    case "/":
      return division(firstNumber, secondNumber);
    default:
      return 0;
  }
}

// how do i get the below to work on every button?

const element = document.getElementsByClassName("button")[0];
element.addEventListener("click", function () {
  let currentDisplay = document.getElementsByClassName("calculatedDisplay");
  let text = element.innerText;
  currentDisplay.textContent += text;
});
