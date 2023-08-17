document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is ready!");
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");
  console.log(display);
  console.log(buttons);

  let currentValue = "";

  function ln(x) {
    return Math.log(x);
  }

  function evaluateResult() {
    const convertedValue = currentValue
      .replace("×", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("tan", "Math.tan")
      .replace("π", "Math.PI")
      .replace("log", "Math.log10")
      .replace("e", "Math.E")
      .replace("√", "Math.sqrt")
      .replace("^", "**")
      .replace("^2", "**2")
      .replace("^3", "**3");

      try {
        const result = eval(convertedValue);
      
        const roundedResult = parseFloat(result.toFixed(10));
        
        currentValue = roundedResult.toString();
        display.value = currentValue;
        
        console.log(result);
      } catch (error) {
        console.log(error);
        currentValue = "Invalid Input";
        display.value = currentValue;
      }
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      const value = button.innerText;

      try {
        if (value == "AC") {
          currentValue = "";
          display.value = currentValue;
        } else if (value == "DEL") {
          currentValue = currentValue.slice(0, -1);
          display.value = currentValue;
        } else if (value == "=") {
          evaluateResult();
        } else {
          currentValue += value;
          display.value = currentValue;
        }
      } catch (error) {
        console.log(error);
        currentValue = "Invalid Input";
        display.value = currentValue;
      }
    });
  }
});
