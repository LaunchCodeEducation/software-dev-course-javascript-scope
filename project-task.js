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
    discount = 0.1; // ⚠️ Issue: Not declared with let/const/var
    return price - (price * discount);
  }
  
  console.log(calculateTotal(100));
  console.log(discount); // Should this be accessible here?
  
  // 🛠 Task:
  // - What is the issue with `discount`?
  // - Why is this a problem in larger programs?
  // - How would you fix it using correct scope practices?
  
  
  // ============================================
  // 🧱 Snippet 2: Block Scope Misunderstanding
  // ============================================
  
  function checkBlockScope() {
    if (true) {
      var status = "Inside if block"; // ⚠️ Using var
    }
    console.log(status); // What will this output?
  }
  
  checkBlockScope();
  
  // 🛠 Task:
  // - What do you expect `console.log(status)` to print?
  // - Why is `var` behaving this way?
  // - How can you change the code so `status` is block-scoped?
  
  
  // ============================================
  // 🪞 Snippet 3: Variable Shadowing
  // ============================================
  
  let count = 5;
  
  function shadowExample() {
    let count = 10; // Same variable name in a new scope
    console.log(count); // What will this log?
  }
  
  shadowExample();
  console.log(count); // What about this one?
  
  // 🛠 Task:
  // - What is variable shadowing?
  // - How does the function scope affect the outer variable?
  // - Does the outer `count` get changed or stay the same?
  
  
  // ============================================
  // ✏️ Final Reflection
  // ============================================
  // After fixing the code:
  // - Summarize what you've learned about variable scope.
  // - How does understanding scope help you write more reliable code?
  // - Where could these issues cause real-world bugs in larger programs?
  