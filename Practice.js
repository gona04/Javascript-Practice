const list = [20, 30, 50, 10, 12]; 

function findTheLargest(list) {
    const largest = list[0];
    let index = 0;
    for(let i = 0; i < list.length; i++) {
        if(list[i] > largest) {
            largest = list[i];
            index = i;
        }
    }

    return {largestNum: largest, index: index};
}

const largest3 = [];
largest3.push(result.largestNum);
list.splice(result.index, 1);
