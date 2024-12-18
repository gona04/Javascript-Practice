function flat(arr, depth = 1) {
    // your imeplementation here
    for(let i = 0; i < arr.length; i++) {
        if((Array.isArray(arr[i])) && depth > 0) {
            for(let a = i; a <= depth; a++) {
                for(let b = 0; b <=depth; b++) {
                    const temp = arr[a][b]
                    console.log(temp);
                }
            }
        }
    }
  }

  const arr = [1, [2], [3, [4]]];
flat(arr)
// [1, 2, 3, [4]]
flat(arr, 1)
// [1, 2, 3, [4]]
flat(arr, 2)