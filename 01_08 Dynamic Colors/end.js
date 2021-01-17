
// ========================================================================================================= //
// ========================================================================================================= //
// === Solution 1 ========================================================================================== //
// ========================================================================================================= //
// ========================================================================================================= //

// we could create three separate functions, which each set the body's background color to a specific hexadecimal value. 
// Since the three functions complete the same task with different values, I'll copy and paste the first function and pass in the appropriate color values for the pink and green buttons. Now let's add three event listeners that will change the body color to the color of the button when the button is clicked Again, I'll copy and paste this event listener just to save some time.
// function makeBodyBlue() {
//   document.body.style.background = '#0f62fe';
// }

// function makeBodyPink() {
//   document.body.style.background = '#ff7eb6';
// }

// function makeBodyGreen() {
//   document.body.style.background = '#42be65';
// }
// //Now let's add three event listeners that will change the body color to the color of the button when the button is clicked Again, I'll copy and paste this event listener just to save some time.
// document.querySelector("#blue").addEventListener('mouseover', makeBodyBlue)
// document.querySelector("#pink").addEventListener('click', makeBodyPink)
// document.querySelector("#green").addEventListener('click', makeBodyGreen)

// This solution works, but isn't extremely scalable, 
// plus we end up with three copies of the same function doing the same task with different values. 

// ========================================================================================================= //
// ========================================================================================================= //
// === Solution 2 ========================================================================================== //
// ========================================================================================================= //
// ========================================================================================================= //

// Instead, we could have just 1 function that accepts a string value + updates the body's bg color. 
// This requires we pass the hexadecimal string as an argument each time the button is clicked. 

// // Let's refactor our current solution to use one function that 
// // accepts a hexadecimal string as an argument. 
function changeColor(color) {
//   // We'll still have one change color function, and it still accepts a color value. 
// //   // But if we return a function, we create a closure over our color value. 
//   return function () {
  document.body.style.background = color;
  // };
}
// We can now create three variables, which will be invoked on button click. 
// We can pass in their respective hexadecimal values. 
const bgColorBlue = changeColor("#0f62fe");
const bgColorPink = changeColor("#ff7eb6");
const bgColorGreen = changeColor("#42be65");
const bgColorPurple = changeColor("#31014f");

// // Now let's update the event listeners to use our new changeColor function. 
// // Since we need to include the hex string as an argument for our callback function, 
// // we'll need to pass an arrow function that calls our changeColor function.` 
document.querySelector("#blue").addEventListener('mouseover', () => changeColor("#0f62fe"));
document.querySelector("#pink").addEventListener('mouseover', () => changeColor("#ff7eb6"));
document.querySelector("#green").addEventListener('mouseover', () => changeColor("#42be65"));
document.querySelector("#purple").addEventListener('mouseover', () => changeColor("#31014f"));


