let matrix = [
    ['A', 'B', 'C', 'D'],
    ['E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L']
]

//A B C D H L K J I E F G
//[0,0][0,1][0,2][0,3]
//[1,3][2,3]
//[2,2][2,1][2,0]
//[1,0][1,1][1,2]

function moving() {
    let results = [];
    top = 0;
    bottom = matrix.length - 1;
    
    for(let i = 0; i < matrix.length; i++) {
        
       for(let j = 0; j < matrix[i].length; j++) {
           if(j == (matrix[i].length - 1) && i == 0) {
               results.push(insideMove(++i, j))
            }
            results.push(insideMove(i, j));
       }
    }
    console.log(results);
}

function insideMove(i, jValue) {
    console.log(`[${i}, ${jValue}]`)
    for(let j = jValue; j < matrix[i].length; j++) {
        return matrix[i][j]
    }
}

moving();