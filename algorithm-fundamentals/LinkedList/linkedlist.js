class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert 1st node
  insetFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  insertLast(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) { 
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

  //Insert at an index
  insertAtIndex(i, num) {
    let newNode = new Node(num);
    let current = this.head;
    let currentSize = this.size;
    let reach = 0;

    if(currentSize < i) {
        return error(`Current Linkedlist has only ${this.size} no of elements`);
    } else {
        while(reach < i) {
            current = current.next;
            reach++;
        }
        
    }
  }

  //Get at index

  //Remove at index

  //Clear list

  //Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  //Get size 
  getSize() {
    return this.size;
  }
}

const ll = new LinkedList();

ll.insetFirst(232);
ll.insetFirst(676);
ll.insetFirst(786);
ll.insertLast(12345);
ll.printListData();
ll.insertAtIndex(2, 33)
console.log('---------------------')
ll.printListData();
// console.log(ll);
