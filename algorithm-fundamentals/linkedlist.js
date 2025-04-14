class LinkedList {
    constructor(num) {
        this.value = num;
        this.next = null;
    }

    /*     
        The idea of linkedlist is we have to iterate through the arry to 
        reach a next that has the null value and then add the 
        new number to that next 
    */
    add(n) {
        if(this.next === null) this.next = new LinkedList(n)
        else {
            let current = this;
            //the array will keep moving till it is not the last element
            while(current.next !== null){
                //we will set current to the last linkedlist element
                current = current.next;
            }
            //Once it is set to the last element now we can add a new num to the last element
            current.next = new LinkedList(n)
        }
    }

   values() {
    let current = this;
    let arr = [];
    arr.push(current.value);
        while(current.next !== null) {
           current = current.next;
           arr.push(current.value);
        }
        return arr;
   }

   reverse() {
    let arr = this.values();
    let rArr = [];
    let i = arr.length - 1;
    while(i >= 0) {
        rArr.push(arr[i]);
        i--;
    }

    return rArr;
   }
}

let nLinkedList = new LinkedList(12);
nLinkedList.add(22);
nLinkedList.add(25);
console.log(nLinkedList.values());
console.log(nLinkedList.reverse());