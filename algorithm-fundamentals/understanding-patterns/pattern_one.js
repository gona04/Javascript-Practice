/* Create the following pattern
 *
 ***
 ****
 ***** */

function printPattern() {
    //0 | 1 |
    for (let i = 0; i < 5; i++) {
      let pattern = "";
    //0<=0 true | 1 <= 0 false | 0 <=1 true:
    for (let j = 0; j <= i; j++) {
        //*
     pattern = pattern.concat("*")
     //j = 1 
    }
    //*
    console.log(pattern);
  }
}

printPattern();
