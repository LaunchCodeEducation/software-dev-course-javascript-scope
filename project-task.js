/*
Objective:
Students will analyze a series of JavaScript code snippets to identify scope-related issues,
fix errors, and explain the correct behavior of variables based on their scope. This exercise
reinforces understanding of global, local, and block scope, as well as variable shadowing
and the scope chain.



Instructions:
    Review the following code snippets.
    Identify the scope-related issue or unexpected behavior in each snippet.
    Fix the issue and explain how the solution adheres to JavaScript's scope rules.
*/



// Code Snippets:
// Snippet 1: Accidental Global Variable
function calculateTotal(price) {
    discount = 0.1; // Missing declaration
    return price - (price * discount);
}

console.log(calculateTotal(100)); // Expected Output: 90
console.log(discount); // ?
// Task: Identify the issue and its impact on the program.


// Snippet 2: Block Scope Misunderstanding
function checkBlockScope() {
    if (true) {
        var status = "Inside if block";
    }
    console.log(status); // What will this output?
}

checkBlockScope();
// Task: Explain why status is accessible outside the if block.


// Snippet 3: Variable Shadowing
let count = 5;

function shadowExample() {
    let count = 10; // Shadows the global count
    console.log(count); // Outputs: ?
}

shadowExample();
console.log(count); // Outputs: ?
// Task: Explain the behavior of count in both console logs.
