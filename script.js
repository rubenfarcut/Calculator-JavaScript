"use strict";
//Variable declarations
const buttonEnter = document.querySelector(".button-enter");
const buttonNumber = document.querySelectorAll(".bt-exp");
const buttonDelete = document.querySelector(".bt-del");
let textInput = document.querySelector(".text-input");

//Calculate expresion
const calcResult = function () {
  const result = eval(textInput.value);
  textInput.value = result;
};

//Press UI buttons
for (let item of buttonNumber) {
  item.addEventListener("click", () => {
    if (
      textInput.value[textInput.value.length - 1] === "-" ||
      textInput.value[textInput.value.length - 1] === "*" ||
      textInput.value[textInput.value.length - 1] === "/" ||
      textInput.value[textInput.value.length - 1] === "+" ||
      textInput.value[textInput.value.length - 1] === "."
    )
      if (
        item.textContent === "+" ||
        item.textContent === "-" ||
        item.textContent === "/" ||
        item.textContent === "*" ||
        item.textContent === "."
      )
        return 0;
    textInput.value += item.textContent;
  });
}
buttonDelete.addEventListener("click", () => {
  textInput.value = " ";
});
buttonEnter.addEventListener("click", calcResult);

//Press keyboard buttons
document.addEventListener("keydown", function (press) {
  if (press.key === "Enter" || press.key === "=") {
    calcResult();
  }
  switch (press.key) {
    case "1":
      textInput.value += "1";
      break;
    case "2":
      textInput.value += "2";
      break;
    case "3":
      textInput.value += "3";
      break;
    case "4":
      textInput.value += "4";
      break;
    case "5":
      textInput.value += "5";
      break;
    case "6":
      textInput.value += "6";
      break;
    case "7":
      textInput.value += "7";
      break;
    case "8":
      textInput.value += "8";
      break;
    case "9":
      textInput.value += "9";
      break;
    case "0":
      textInput.value += "0";
      break;
    case "/":
      if (
        textInput.value[textInput.value.length - 1] != "." &&
        textInput.value[textInput.value.length - 1] != "/" &&
        textInput.value[textInput.value.length - 1] != "*" &&
        textInput.value[textInput.value.length - 1] != "-" &&
        textInput.value[textInput.value.length - 1] != "+"
      )
        textInput.value += "/";
      break;
    case "*":
      if (
        textInput.value[textInput.value.length - 1] != "." &&
        textInput.value[textInput.value.length - 1] != "/" &&
        textInput.value[textInput.value.length - 1] != "*" &&
        textInput.value[textInput.value.length - 1] != "-" &&
        textInput.value[textInput.value.length - 1] != "+"
      )
        textInput.value += "*";
      break;
    case "+":
      if (
        textInput.value[textInput.value.length - 1] != "." &&
        textInput.value[textInput.value.length - 1] != "/" &&
        textInput.value[textInput.value.length - 1] != "*" &&
        textInput.value[textInput.value.length - 1] != "-" &&
        textInput.value[textInput.value.length - 1] != "+"
      )
        textInput.value += "+";
      break;
    case "-":
      if (
        textInput.value[textInput.value.length - 1] != "." &&
        textInput.value[textInput.value.length - 1] != "/" &&
        textInput.value[textInput.value.length - 1] != "*" &&
        textInput.value[textInput.value.length - 1] != "-" &&
        textInput.value[textInput.value.length - 1] != "+"
      )
        textInput.value += "-";
      break;
    case ".":
      if (
        textInput.value[textInput.value.length - 1] != "." &&
        textInput.value[textInput.value.length - 1] != "/" &&
        textInput.value[textInput.value.length - 1] != "*" &&
        textInput.value[textInput.value.length - 1] != "-" &&
        textInput.value[textInput.value.length - 1] != "+"
      )
        textInput.value += ".";
      break;
    case "Backspace":
      textInput.value = textInput.value.slice(0, -1);
      break;
  }
});
