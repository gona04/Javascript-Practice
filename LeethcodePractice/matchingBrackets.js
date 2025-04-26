/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let isMaching = new Map().set("{", "}").set("[", "]").set("(", ")");
    let stack = [];
    s.split("").forEach(a => {
        if(isMaching.has(a)) {
            stack.push(a);
        } else {
            //Get the top element of stack
            let top = stack[stack.length-1];
            if(isMaching.get(top) === a) {
                stack.pop()
            }
        }
    })

    if(stack.length === 0) return true 
    else return false
};

console.log(isValid("()[]{}")); // true
console.log(isValid("(}")); // false
console.log(isValid("([])")); //true
console.log(isValid("([]){")); // false