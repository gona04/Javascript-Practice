/* 
Create the following pattern
 *****
 ****
 ***
 **
 *
*/
function oppositePattern() {
  for (let i = 4; i >= 0; i--) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern = pattern.concat("*");
    }
    console.log(pattern);
  }
}

oppositePattern();
