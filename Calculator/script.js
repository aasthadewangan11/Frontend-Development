/* Build a JavaScript Calculator

User Story: I can add, subtract, multiply and divide two numbers.

User Story: I can clear the input field with a clear button.

User Story: I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

Preliminary Things To Do:

1. Create a screen to display the output.
2. Create buttons for Clear, Operators, and Numbers.
3. Create onclick functions for the buttons to store the button value in a variable as a string.
4. Eval() the string to display the correct output on the calculator screen.
5. Limit the max output to 10 digits.
*/

/* 
Things To Fix:
1. Split the addValue function to addValue and addOperator functions as adding multiple numbers in a row should be allowed and build a number on the calculator screen but adding multiple operators in a row should not be allowed and only the first operator input should be registered.
2. Limit the number of digits to 10 as large numbers or an equation such as 1/3 overflow the display.
3. Fix the +/- button and corresponding reverse function, as the behavior is erratic.

Wish List:

1. Improve visuals.
2. Add keyboard presses to click the buttons.
3. Add more operators.
4. Make it responsive.
*/

/* Variables to store the calculator screen output and stored output as strings */
let screenOutput = "";
let storedOutput = "";

/* C button sets the calculator screen values to 0 */
const clearScreen = () => {
  screenOutput = "";
  document.getElementById("output").innerHTML = 0;
  document.getElementById("stored").innerHTML = 0;
}

/* +/- button adds *(-1) to the stored output string to reverse the number from positive to negative */
//function reverse() {
//  screenOutput += "*(-1)";
//}

/* All other buttons pass the button as a parameter and add the button's value to the stored output string. If the multiply button is pressed pass an x instead of * to the calculator screen, otherwise pass the pressed button to the screen.  */
const addValue = (btnValue) => {
  screenOutput += btnValue.value;
  document.getElementById("stored").innerHTML = screenOutput;
}

const addOperator = (btnValue) => {
  screenOutput += btnValue.value;
  document.getElementById("stored").innerHTML = screenOutput;
}

/* Equals button checks if the evaluated result of the stored output string is greater than 10, and if it is displays an error on the calculator screen, otherwise display the evaluated output on the calculator screen */
const equals = () => {
  screenOutput = screenOutput.replace(/x/g, "*");
  screenOutput = eval(screenOutput);
  if(screenOutput.toString().length > 10) {
    screenOutput = screenOutput.toString().slice(0,10);
  }
  document.getElementById("output").innerHTML = screenOutput;
  document.getElementById("stored").innerHTML = screenOutput;
}
