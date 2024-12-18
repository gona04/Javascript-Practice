

// Funcitonal expression 
/* This is defined at runtime */
var canada = () => {
    console.log('Cold');
}

// Function declaration 
/* This is hoisted */
function india() {
    console.log('warm');
}

function marry(p1, p2) {
    console.log(arguments);
    console.log(`${p1} is married to ${p2}`);
}

marry('Tim', 'Tina');