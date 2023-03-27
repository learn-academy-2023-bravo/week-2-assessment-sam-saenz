# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is defined when a function is being written, and determines what arguments will be required. An argument itself is the actual value being fed into a function when it is called.

Researched answer: Specifically, the argument is provided into the function invocation, between the parentheses. It will then be substituted into the function, wherever the corrosponding parameter is used. So, if a function has a paramter called string, and that function is called with the argument "hello", "hello" will be used wherever the parameter 'string' is used.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map takes in another function as a parameter, but is used on an array. So, I think that the only parameter is the function, and that it is required.

Researched answer: The .map function takes in a function as parameter, but that function also has its own parameters, currentValue, index, and array, so they can be though of as sub-parameters.

3. What is the difference between map and filter?

Your answer: They both take in an array, but a map will always return an array of the same size, after doing something to each index of the array, whereas a filter will filter out values based on a condition you give it.

Researched answer: Both functions are higher-order functions, but map will return the same array, transformed based on an input, meaning it will always  be the same size. Filter will filter out values of the array that do not meet a determined criteria, and so will not always return the same size array, but a new one with only the filtered results.

1. What is iteration?

Your answer: Iteration is repeating a given process a certain amount of times, either a pre-determined amount, or until a certain condition is met.

Researched answer: Iteration will repeat the execution of a given code block either a specified amount of times, or until a condition is met, implemented using structures such as loops.

1. What is the difference between a function and a method?

Your answer: A method is a type of function, specifically one that exists within an object's definition, and belongs to that specific object or class. Other than that, they function the same.

Researched answer: A method is a function that is associated with a defined object or class. Because of this, a method and a function are similar, but the method is able to access the object or class that they are a part of, otherwise functioning as a regular function.

6. STRETCH: What is hoisting in JavaScript?

Your answer: I am not sure what hoisting is in JavaScript.

Researched answer: Hoisting is the behaviour of Javascript code to basically move all declarations to the top of the code (internally, when it is being run, not visually in the code editor). This allows for declared variables to be used "before" they are declared. Variables defined with let and const will still not be recognized after hoisting.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: Components are a feature of React that act similarly to funcitons in Javascript, in that they are reusable code snippets.

2. Spread operator: The spread operator (...) allows you to spread apart an array or string into its components for an input.

3. React state: A state is an object in react that holds current, changing information about a given component.

4. React props: In react, props, short for properties, are objects that store attributes and are passed into components liek arguments.

5. DOM events: DOM events are things that trigger when a specific action or occurence happens on a webpage, such as a click or load.
