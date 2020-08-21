// Step 1: call the elements "button"
const botonNumber = document.getElementsByName("data-number");
const botonClear = document.getElementsByName("data-clear")[0];
const botonResult = document.getElementsByName("data-result")[0];
const botonOperator = document.getElementsByName("data-operator");
var result = document.getElementById("result");
var operation = "";
var opPrevieus = "";
var opActual = "";

// Step 2: define the event for every single button
botonNumber.forEach((boton) => {
  boton.addEventListener("click", () => {
    addNumbers(boton.innerText);
  });
});

botonOperator.forEach((boton) => {
  boton.addEventListener("click", () => {
    selectOperator(boton.innerText);
  });
});

botonClear.addEventListener("click", () => {
  clearDisplay();
  updateDisplay();
});

botonResult.addEventListener("click", () => {
  calculate();
  updateDisplay();
});

// Step 3: build the functions that activate every event
const calculate = () => {
  let calculateOp;
  const prev = parseFloat(opPrevieus);
  const actual = parseFloat(opActual);
  if (isNaN(prev) || isNaN(actual)) return;
  switch (operation) {
    case "+":
      calculateOp = prev + actual;
      break;
    case "-":
      calculateOp = prev - actual;
      break;
    case "X":
      calculateOp = prev * actual;
      break;
    case "/":
      calculateOp = prev / actual;
      break;
    case "%":
      calculateOp = prev % actual;
      break;
  }
  opActual = calculateOp;
  operation = undefined;
  opPrevieus = "";
};
const addNumbers = (num) => {
  opActual = opActual.toString() + num.toString();
  updateDisplay();
};

const updateDisplay = () => {
  result.value = opActual;
};

const clearDisplay = () => {
  opPrevieus = "";
  opActual = "";
  operation = undefined;
};

const selectOperator = (op) => {
  if (opActual == "") return;
  if (opPrevieus != "") {
    calculate();
  }
  operation = op.toString();
  opPrevieus = opActual;
  opActual = "";
};
