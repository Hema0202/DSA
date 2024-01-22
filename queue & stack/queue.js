class Queue {
    #data
    constructor() {
        this.#data = [];
    }

    isEmpty() {
        return (this.#data.length === 0);
    }

    add(e) {
        return this.#data.push(e);
    }

    remove() {
        if(this.isEmpty()){
            console.log('Queue is already empty!');
            return;
        }
        return this.#data.shift();
    }

    peak() {
        if(this.isEmpty()){
            console.log('Queue is already empty!');
            return;
        }
        return this.#data[0];
    }

    size() {
        return this.#data.length;
    }

    print() {
        console.log(this.#data);
    }
}

let q = new Queue();

// q.add(8);
// q.add(2);
// q.add(5);
// q.add(3);

// q.print();

// q.remove();
// q.remove();

// q.print();