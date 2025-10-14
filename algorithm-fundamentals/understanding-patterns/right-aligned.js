/*
 *
 **
 ***
 **** */

function printRightAligned() {
    let last = 4
    let space = last; 
  for (let i = 0; i < last; i++) {
    space--;
    pattern = new Array(space);
    pattern = pattern.fill(" ", 0, space);
    for(let j = 0; j <=i; j++) {
        pattern.push("*")
    }
    console.log(pattern);
  }
}

// printRightAligned();


function stringRightAligned(n) {
    let spaces = n;
    let pattern = "";
    for(let i = 0; i <= n; i++) {
        if(spaces >= 0) pattern = " ".repeat(spaces);
        spaces--;
        for(let j = 0; j <= i; j++) {
            pattern = pattern.concat("*");
        }
        console.log(pattern);
    }
}

stringRightAligned(4);