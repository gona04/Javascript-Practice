/*    
   *
  ***
 *****
******* */
//1, 3, 5, 7, 9, 11
function centerAligned(rows) {
    let stars = 0;
    let spaces = (2*rows) - 1/2; 
    //0 | 1 | 2
    for(let i = 1; i <= rows; i++) {
        stars = (2*i) -1;
        // console.log(stars);
        let pattern = ' '.repeat(spaces);
        for(let j = 1; j <= stars; j++){
            //0 | 0 
            pattern = pattern.concat("*");
        }
        spaces--;
        console.log(pattern);
    }
}

centerAligned(3);
centerAligned(4);