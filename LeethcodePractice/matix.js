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

function moving(arr) {
    let top = 0; 
    let bottom = arr.length -1;
    let left = 0;
    let right = arr[0].length -1;

    let newArr = [];

    for(let j = left; j <= right; j++) {
        newArr.push(arr[top][j])
    }
    top++;
    for(let j = top; j <= bottom; j++) {
        newArr.push(arr[j][right]);
    }
    right--;
    for(let j = right; j >= left; j--) {
        newArr.push(arr[bottom][j])
    }
    bottom--;
    for(let j = bottom; j >= top; j--) {
        //[2][0]
        newArr.push(arr[j][left]);
    }
    left++;
    for(let j= left; j <= right; j++) {
        //[1,1]
        newArr.push(arr[top][j]);
    }

    return newArr;
}

console.log(moving(matrix));