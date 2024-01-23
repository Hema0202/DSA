// class Queue {
//     #data
//     constructor() {
//         this.#data = [];
//     }

//     isEmpty() {
//         return (this.#data.length === 0);
//     }

//     add(e) {
//         return this.#data.push(e);
//     }

//     remove() {
//         if(this.isEmpty()){
//             console.log('Queue is already empty!');
//             return;
//         }
//         return this.#data.shift();
//     }

//     peak() {
//         if(this.isEmpty()){
//             console.log('Queue is already empty!');
//             return;
//         }
//         return this.#data[0];
//     }

//     size() {
//         return this.#data.length;
//     }

//     print() {
//         console.log(this.#data);
//     }
// }

// let q = new Queue();

// q.add(8);
// q.add(2);
// q.add(5);
// q.add(3);

// q.print();

// q.remove();
// q.remove();

// q.print();

//Queue implimentation using LinkedList
let LinkedList = require('./../LinkedList/linkedList');

class Queue{
    #ll;
    constructor(){
        this.#ll = new LinkedList();
    }

    isEmpty(){
        return this.#ll.size === 0;
    }

    add(e) {
        this.#ll.add(e);
        return this.size();
    }

    remove() {
        if(this.isEmpty()) {
            console.log('Queue is already empty!');
            return;
        }
        let deleteElement = this.#ll.head.val
         this.#ll.removeFirst();
         return deleteElement;
    }

    peek() {
        if(this.isEmpty()) {
            console.log('Queue is empty!');
            return;
        }
        return this.#ll.head.val;
    }

    size() {
        return this.#ll.size;
    }

    print() {
        this.#ll.print();
    }
}
// let q =new Queue();

// q.add(5);
// q.add(3);
// q.add(8);
// q.add(9);

// q.print();

// console.log(q.peek());
 
module.exports = Queue;

// //Queue implimentation using Stack
// const Stack = require('./stack');

// class Queue {
//     #stack1
//     #stack2
//     constructor() {
//         this.#stack1 = new Stack();
//         this.#stack2 = new Stack();
//     }

//     isEmpty() {
//         return this.#stack1.isEmpty();
//     }
    
//     add(e) {
//         return this.#stack1.add(e);
//     }

//     remove() {
//         if(this.isEmpty()) {
//             console.log('Queue is empty!');
//             return;
//         }

//         //push all eements of stack 1 to stack2
//         while(!this.isEmpty()) {
//             this.#stack2.add(this.#stack1.remove());
//         }

//         //remove the top most element of stack 2
//         let removeElement = this.#stack2.remove();

//         //push all element of stack 2 to stack 1
//         while(!this.#stack2.isEmpty()) {
//             this.#stack1.add(this.#stack2.remove());
//         }

//         return removeElement;
//     }

//     peek() {
//         if(this.isEmpty()) {
//             console.log('Queue is empty!');
//             return;
//         }
//         while(!this.isEmpty()) {
//             this.#stack2.add(this.#stack1.remove());
//         }
//         let peekElement = this.#stack2.peek();
//         while(!this.#stack2.isEmpty) {
//             this.#stack1.add(this.#stack2.remove());
//         }

//         return peekElement;
//     }

//     size() {
//         this.#stack1.size();
//     }
// }

// let q = new Queue();

// q.add(9);
// q.add(8);
// q.add(2);
// // console.log(q.remove());
// console.log(q.peek());