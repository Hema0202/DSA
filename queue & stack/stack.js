class Stack{
    #data
    constructor(){
        this.#data = [];
    }

    isEmpty(){
        // if(this.#data.length ==0) return true;
        // else return false;
        return (this.#data.length === 0);
    }

    add(e) {
        return this.#data.push(e);
    }

    remove(){
        if(this.isEmpty()) {
            console.warn('Stack is already empty!');
        }
        return this.#data.pop();
    }

    peak() {
        if(this.isEmpty()) {
            console.warn('Stack is empty!');
        }
        return this.#data[this.size()-1];
    }

    size() {
        return this.#data.length;
    }

    print() {
        console.log(this.#data);
    }
}

let s = new Stack();

s.add(2);
s.add(5);
s.add(8);
s.add(3);

// s.print();

// s.remove();
// s.remove();

// s.print();

// console.log(s.peak());