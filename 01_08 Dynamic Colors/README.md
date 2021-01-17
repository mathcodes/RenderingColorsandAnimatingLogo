# 01_08 Dynamic Colors

## What You'll Do

Create three buttons: blue, pink, and green. When each button is clicked, you should set the background of the document body to the selected color.

## Requirements

- Use closures

## Instructions

Develop your solution in the `begin.js` file. If this challenge requires you to interact with the DOM, you will have an HTML element provided for you in the `index.html` file. Use this node to complete your DOM manipulation.

If you get stuck or want to see the final solution, you can check out the `end.js` file. To run the solution, comment the `<script src="./start.js"><script>` line and uncomment the `<script src="./end.js></script>` line.


## Dictation

## Dynamic colors
Selecting transcript lines in this section will navigate to timestamp in the video
(bright music) - Closures are functions that close over their lexical environment or their scope. This allows us to access an outer function scope from an inner function. We use closures in many different places. For example, if we're filtering an array of items, or if we're creating a timeout. In this challenge, we'll use closures to create three buttons. Each button will represent a different color and we'll change the background color of the document body to the color value. Using a closure, create a function called change color that accepts a color value. When the button is clicked, the closure should be invoked and the body background color should be updated. Pause the video here and develop your solution, and when you're ready, come back and I'll walk you through how I solve the challenge. (bright music) 


## solution

In our index.html file, we have three buttons. Back in our JavaScript file, let's walk through three different ways we could update the body's background color. 

As the first attempt, we could create three separate functions, which each set the body's background color to a specific hexadecimal value. 
Since the three functions complete the same task with different values, I'll copy and paste the first function and pass in the appropriate color values for the pink and green buttons. Now let's add three event listeners that will change the body color to the color of the button when the button is clicked Again, I'll copy and paste this event listener just to save some time. If we head to the browser, we can see that clicking each button updates the body's background color. This solution works, but isn't extremely scalable, plus we end up with three copies of the same function doing the same task with different values. 

- Instead, we could have just one function that accepts a string value and updates the body's background color. 

- This requires we pass the hexadecimal string as an argument each time the button is clicked. 

- Let's refactor our current solution to use one function that accepts a hexadecimal string as an argument. 

- Now let's update the event listeners to use our new change color function. 

`- Since we need to include the hex string as an argument for our callback function, we'll need to pass an arrow function that calls our change color function.` 

- Again, I'll copy and paste this arrow function into the pink and green event listeners. 

- If we go back to our browser, let's check that everything is still working as expected. 

- Let's use a closure to explicitly set the body's background color to a particular value. 

- We'll still have one change color function, and it still accepts a color value. 
- But if we return a function, we create a closure over our color value. 
- We can now create three variables, which will be invoked on button click. 
- We can pass in their respective hexadecimal values. 
- I'm going to copy and paste the same line for the pink and green buttons. 
- We can now use these three new variables and our event listeners. 
- If we head back to the UI, we can see that clicking each button still updates the body's background color. 


Closures are one of those things that should be used intentionally because they can create unnecessary complexity. 

Often we can use a more straightforward approach to solve the same problem. 

Closures are one of those things that continues to confuse me. So if you're getting a little discouraged, just be patient, it takes a little time, but once you start to practice a little bit more, closures will become second nature.