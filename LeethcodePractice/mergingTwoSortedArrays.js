/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 //[1,2,4] [-1,0,8,10]
 /*
    If -1 < 1 // j = 0; i =0; = j++;
    If 0 < 1 // j = 1; i=0; = j++;
    If 8 < 1 // not true; j = 2; i = 0
  */
    var mergeTwoLists = function(list1, list2) {
        let largest = list1.length > list2.length ? list1 : list2;
        let smaller = list1.length < list2.length ? list1 : list2;
        let newList = [];
    
        let i = 0;
        let j = 0;
       while(i < largest.length) {
        j = i-1;
        while(j < i) {
            if(largest[j] < smaller[i]) {
                newList.push(largest[j]);
                j++;
            }
        }
        i = j+1;
       }

       return newList;
    };

    console.log(mergeTwoLists([1,2,4] ,[-1,0,8,10]));