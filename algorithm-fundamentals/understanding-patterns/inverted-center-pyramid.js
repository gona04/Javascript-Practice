/* 
1234567
*******
 12345
 *****
  123
  ***
  `1
   *
   */

  function invertedCenterAligned(n) {
    //4
    let noOfElem = (2*n) -2;
    //[4]
    let pattern = new Array(noOfElem);
    let places = 0;
    console.log(pattern.length)

    //0 | 1
    for(let i = 0; i < n; i++) {
        //1
        // console.log(places);
        //1 <= 3 | 
        for(let j = places; j <= noOfElem; j++) {
            //p[1]
            pattern[j] = "*";
        }
        console.log(pattern.join(""));
        //1
        places++; 
        noOfElem--;
        pattern = new Array((2*n) -2).fill(" ");
    }
  
  }

  invertedCenterAligned(3)