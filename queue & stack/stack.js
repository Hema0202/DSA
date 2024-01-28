// A Stack is a linear data structure that holds a linear, ordered sequence of elements. It is an abstract data type. A Stack works on the LIFO process (Last In First Out), i.e., the element that was inserted last will be removed first.

// class Stack{
//     #data
//     constructor(){
//         this.#data = [];
//     }

//     isEmpty(){
//         // if(this.#data.length ==0) return true;
//         // else return false;
//         return (this.#data.length === 0);
//     }

//     add(e) {
//         return this.#data.push(e);
//     }

//     remove(){
//         if(this.isEmpty()) {
//             console.warn('Stack is already empty!');
//         }
//         return this.#data.pop();
//     }

//     peak() {
//         if(this.isEmpty()) {
//             console.warn('Stack is empty!');
//         }
//         return this.#data[this.size()-1];
//     }

//     size() {
//         return this.#data.length;
//     }

//     print() {
//         console.log(this.#data);
//     }
// }

// let s = new Stack();

// s.add(2);
// s.add(5);
// s.add(8);
// s.add(3);

// s.print();

// s.remove();
// s.remove();

// s.print();

// console.log(s.peak());


//implement stack using LinkedList
// let LinkedList = require('./../LinkedList/linkedList');
// class Stack {
//     #ll = null;
//     constructor() {
//         this.#ll = new LinkedList();
//     }

//     isEmpty() {
//         return (this.#ll.size == 0);
//     }

//     add(e) {
//         this.#ll.addFirst(e);
//         return this.size();
//     }

//     remove() {
//         if(this.isEmpty()) {
//             console.log('Stack is already empty');
//             return;
//         }
//         let removeElement = this.peek();
//         this.#ll.removeFirst();
//         return removeElement;
//     }

//     size() {
//         return this.#ll.size;
//     }

//     peek() {
//         if(this.isEmpty()){
//             console.log('Stack is empty');
//             return;
//         }
//         return this.#ll.head.val;
//     }

//     print() {
//         this.#ll.print();
//     }
// }

// // let s =new Stack();

// // s.add(5);
// // s.add(3);
// // s.add(8);
// // s.add(9);

// // s.print();

// // console.log(s.remove());

// // s.print();

// // console.log(s.peek());

// module.exports = Stack;


//Implement stack using Queue
const Queue = require('./queue');

class Stack {
    #q1;
    #q2;
    constructor() {
        this.#q1 = new Queue();
        this.#q2 = new Queue();
    }

    isEmpty() {
        return this.#q1.isEmpty();
    }

    add(e) {
        return this.#q1.add(e);
    }

    remove() {
        if(this.isEmpty()) {
            console.log('Stack is empty!');
            return;
        }
        while(this.size()>1) {
            this.#q2.add(this.#q1.remove());
        }
        let removedElement = this.#q1.remove();

        this.#swap();

        return removedElement;
    }

    #swap() {
        [this.#q1, this.#q2] = [this.#q2, this.#q1];
    }

    peek() {
        if(this.isEmpty()) {
            console.log('Stack is empty!');
            return;
        }
        while(this.size()>1) {
            this.#q2.add(this.#q1.remove());
        }
        let peekElement = this.#q1.remove();
        this.#q2.add(peekElement);

        this.#swap();

        return peekElement;
    }

    size() {
        return this.#q1.size();
    }
}

let s = new Stack();

s.add(5);
s.add(8);
s.add(3);
s.add(2);
// s.print();
console.log(s.size());//**** */


