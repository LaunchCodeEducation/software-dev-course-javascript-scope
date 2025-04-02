/*
===========================================
🔍 Scope Debugging Challenge
===========================================

🎯 Objective:
Students will analyze a series of JavaScript code snippets to:

- Identify scope-related issues
- Fix errors
- Explain the correct behavior of variables based on their scope

This exercise reinforces:
- Global, local, and block scope
- Variable shadowing
- Scope chain behavior

---
🧭 Instructions:

1️⃣ Review the code snippets below.

2️⃣ Identify the scope-related issue or unexpected behavior.

3️⃣ Fix the issue and explain how your solution aligns with JavaScript's scope rules.
*/

// ============================================
// 🚨 Snippet 1: Accidental Global Variable
// ============================================

function calculateTotal(price) {
    discount = 0.1; // ❌ Issue: Missing declaration makes this a global variable
    return price - (price * discount);
}

console.log(calculateTotal(100)); // Expected Output: 90
console.log(discount); // Outputs 0.1, but shouldn't be accessible globally

// ✅ Task:
// - Identify the issue: `discount` is not declared with let/const/var
// - Fix it:
function calculateTotalFixed(price) {
    let discount = 0.1; // Declared locally
    return price - (price * discount);
}

console.log(calculateTotalFixed(100));
// console.log(discount); // ❌ ReferenceError if uncommented: discount is not defined

// Explanation: Without declaration, `discount` becomes a global variable (accidental leakage).
// Adding `let` ensures it's scoped to the function only.


// ============================================
// 🧱 Snippet 2: Block Scope Misunderstanding
// ============================================

function checkBlockScope() {
    if (true) {
        var status = "Inside if block"; // 👀 var is function-scoped
    }
    console.log(status); // Outputs: "Inside if block"
}

checkBlockScope();

// ✅ Task:
// - Explain: var is function-scoped, not block-scoped.
// - Fix using let:
function checkBlockScopeFixed() {
    if (true) {
        let status = "Inside if block"; // ✅ Block-scoped
        console.log(status); // Now only accessible here
    }
    // console.log(status); // ❌ ReferenceError if uncommented
}

checkBlockScopeFixed();


// ============================================
// 🪞 Snippet 3: Variable Shadowing
// ============================================

let count = 5;

function shadowExample() {
    let count = 10; // Shadows outer scope variable
    console.log(count); // Outputs: 10
}

shadowExample();
console.log(count); // Outputs: 5

// ✅ Task:
// - Explanation:
//   - Inside the function, the local `count` shadows the global one.
//   - The outer `count` remains unchanged.
