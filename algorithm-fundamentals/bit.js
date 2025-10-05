function solve(A){

        let binary = A.toString(2)
        let flip = binary.split("").map(a => {
            if(a === "1") {
                a = "0"
            } else {
                a = "1"
            }
            return a
        })
        console.log(flip);
        console.log(parseInt(flip, 2));
        return parseInt(flip);
	}

console.log(solve(5))