

/* 
"Thinking code is conscious"
→ You assume code knows where it is or what context it's in
→ This leads to confusion with how this works

"Functional execution default — this & arguments"
→ The default behavior of functions when executed
→ this binding & the magic arguments object

"Cogito ergo sum — true with declarative functions"
→ Function declarations are "known" before execution
→ They hoist, they exist before being executed

"Subconscious — lexical scope, arrow functions"
→ Arrow functions don’t have their own this
→ They remember scope subconsciously (lexically)

To strengthen this mental model, here are carefully crafted sums (problems) 
for each category that reinforce the exact concepts you’re mapping. */

// 🧠 1. “Thinking code is conscious” — THE this TRAP

// These problems train your brain to stop assuming code "knows" context.

// Problem 1A — What does this print?
console.log("GLOBAL this:", this);

let title = "Global Title";

const book = {
  title: "JavaScript Deep Dive",

  dynamicShow: function() {
    console.log("Dynamic this:", this.title);
  }
};

book.dynamicShow();  // Who is calling? → book → prints "JavaScript Deep Dive"

const detached = book.dynamicShow;
detached();          // Who is calling? → global → prints "Global Title"


