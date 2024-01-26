// class Node {
//     constructor(val){
//         this.val =val;
//         this.next = null;
//     }  
// }
// class LinkedList{
//      constructor(){
//         this.head = null;
//         this.size = 0;
//      }   

//      add(element){
//         let node = new Node(element);
//         if(this.head == null){
//             this.head = node;
//         } else{
//             let cur = this.head;
//             while(cur.next != null){
//                 cur = cur.next;
//             }
//             cur.next = node;
//         }
//         this.size++;
//      }

//      remove(){
//         if(this.head == null){
//             console.log('Linked list is empty');
//             return;
//         }
//         if(this.head.next == null){
//             this.head = null;
//         }else{
//             let cur = this.head;
//             while(cur.next.next != null){
//                 cur = cur.next;
//             }
//             cur.next = null;
//         }
//         this.size--;
//      }

//      addFirst(element){
//         let node = new Node(element);
//         node.next = this.head;
//         this.head = node;
//         this.size++;
//      }

//      removeFirst(){
//         if(this.head == null){
//             console.log("The linked list is already empty.");
//             return null;
//         }else{
//             this.head=this.head.next;
//             this.size--;
//         }
//      }


//      addAt(element,index){
//         if(index >= this.size) this.add(element);
//         else if(index==0) this.addFirst(element);
//         else{
//             let node = new Node(element);
//             let cur= this.head;
//             let loopCount = index-1;
//             while(loopCount>0){
//                 cur = cur.next;
//                 loopCount--;
//             }
//             let temp =cur.next;
//             cur.next = node;
//             node.next = temp;

//             this.size++;
//         }
//      }

    
//     removeAt(index){
//         if(index<0 || index>=this.size){
//             console.log('Invalid index');
//             return;
//         }else if(index==0) this.removeFirst();
//         else{
//             let loopCount = index-1;
//             let cur =this.head;
//             while(loopCount>0){
//                 cur = cur.next;
//                 loopCount--;
//             }

//             cur.next = cur.next.next;
//             this.size--;
//         }
//     }

//     reverse(){
//         let prev = null;
//         let cur = this.head;
//         while(cur != null){
//             let next = cur.next;
//             cur.next= prev;
//             prev = cur;
//             cur=next;
//         }
//         this.head = prev;
//     }

//      print(){
//         let cur = this.head;
//         let s='';
//         while(cur != null){
//             s+=cur.val+"->";
//             cur = cur.next;
//         }
//         s+=null;
//         console.log(s);
//      }
// }
// let ll = new LinkedList();

// ll.add(5);
// ll.add(2);
// ll.add(3);
// console.log(ll);
// ll.print();
// ll.remove();
// ll.print();

// ll.addFirst(2);
// ll.print();

// ll.removeFirst();
// ll.removeFirst();
// ll.print();

// ll.reverse();
// ll.print();

//***************************LinkedList with tail **********/

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size == 0;
//     }

//     add(e) {
//         const node = new Node(e);
//         if(this.head == null) {
//             this.head = node ; 
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.size++;
//         return this.size;
//     }

//     remove() {
//         if(this.isEmpty()) {
//             console.log('LinkedList is alredy empty!');
//             return null;
//         }else {
//             const removedElement = this.tail.val;
//             const dummy = new Node(0);
//             dummy.next = this.head;
//             let cur = dummy;
//             while(cur.next != this.tail){
//                 cur = cur.next;
//             }
//             cur.next = null;
//             this.head = dummy.next;
//             if(cur == dummy) this.tail = null;
//             else this.tail = cur;

//             this.size--;
//             return removedElement;
//         }
//     }

//     addFirst(e) {
//         let node = new Node(e);
//         node.next = this.head;
//         this.head = node;
//         this.size++;
//     }

//     removeFirst(){
//         if(this.head == null) {
//             console.log('The linkedlist is already empty');
//             return null;
//         } else {
//             let removedElement = this.head.val;
//             this.head = this.head.next;
//             this.size--;
//             return removedElement;
//         }
//     }

//     addAt(e, i) {
//         if(i>=this.size) this.add(e);
//         else if(i==0) this.addFirst(e);
//         else{
//             let node = new Node(e);
//             let cur = this.head;
//             let loopCount = i -1;
//             while(loopCount > 0) {
//                 cur = cur.next;
//                 loopCount--;
//             }

//             let temp = cur.next;
//             cur.next = node ;
//             node.next = temp;

//             this.size++;
//         }
//     }

//     removeAt(i) {
//         if(i < 0 || i>= this.size) {
//             console.log('Invalid index');
//             return;
//         } else if (i == 0) this.removeFirst();
//         else {
//             let loopCount = i-1;
//             let cur = this.head;
//             while(loopCount > 0) {
//                 cur = cur.next;
//                 loopCount--;
//             }

//             cur.next = cur.next.next;
//             this.size--;
//         }
//     }

//     size() {
//         return this.size;
//     }

//     print() {
//         let cur = this.head;
//         let s = '';
//         while(cur != null) {
//             s+=cur.val + '->';
//             cur = cur.next;
//         }
//         s+=null;
//         console.log(s);
//     }
// }
// let ll = new LinkedList();
// ll.add(3);
// ll.add(2);
// ll.add(8);
// ll.add(10);
// console.log(ll.add(5));
// ll.print();
// ll.remove();
// ll.addFirst(7);
// ll.removeFirst();
// ll.addAt(5,2)
// ll.removeAt(3);
// ll.print();

// module.exports= LinkedList;


//***************************Doubly LinkedList **********/
 
class DoublyListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    add(val) {
        const node = new DoublyListNode(val);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            let cur = this.head;
            while(cur.next != null) {
                cur = cur.next;
            }
            cur.next = node;
            node.prev = cur;
        }
        this.size++;
        return this.size;
    }

    remove() {
        if(this.isEmpty()) {
            console.log('LinkedList is already empty!');
            return null;
        } else {
            let removedElement;
            if(this.size == 1) {
                removedElement = this.head.val;
                this.head = null;
            }else {
                let cur = this.head;
                while(cur.next.next != null) {
                    cur = cur.next;
                }
                removedElement = cur.next.val;
                cur.next.prev = null;
                cur.next = null;
            }

            this.size--;
            return removedElement;
        }
    }

    addFirst(e) {
        const node = new DoublyListNode(e);
        if(this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.size++;
        return this.size;
    }

    removeFirst() {
        if(this.isEmpty()) {
            console.log('LinkedList is already empty');
            return null;
        } else {
            let removedElement = this.head.val;
            if(this.head.next) {
                this.head.next.prev = null;
                this.head = this.head.next;
            } else {
                this.head = null;
                this.tail = null;
            }

            this.size--;
            return removedElement;
        }
    }

    addAt(e, i) {
        if(i > this.size) {
           let node = new Node(e);

           if(this.isEmpty()){
            this.head = node;
            this.tail = node;
           } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
           }

           this.size++;
        }
        else if(i==0) this.addFirst(e);
        else {
            let node = new DoublyListNode(e);
            let cur = this.head;
            let loopCount = i-1;
            while(loopCount > 0){
                cur = cur.next;
                loopCount--;
            }

            let temp = cur.next;
            cur.next = node;
             
            if(temp) {
                temp.prev = node;
                node.next = temp;
            } else {
                this.tail = node;
            }

            node.prev = cur;

            this.size++;
        }
    }

    removeAt(i) {
        if(i<0 || i>=this.size) {
            console.log('Invalid index');
            return;
        } else if(i==0) this.removeFirst();
        else {
            let loopCount = i-1;
            let cur = this.head;
            while(loopCount>0) {
                cur = cur.next;
                loopCount--;
            }
            let removedNode = cur.next;
            cur.next = removedNode.next;
            if(removedNode.next){
                removedNode.next.prev = cur;
            } else {
                this.tail = cur;
            }
            this.size--;
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log(null);
        } else {
            let s ='null <-';
            let cur = this.head;
            while(cur.next != null) {
                s+=(cur.val + "<=>");
                cur=cur.next;
            }
            s+=(cur.val + '-> null');
            console.log(s);
        }
    }
}


let dll = new DoublyLinkedList();

dll.add(5);
dll.add(6);
dll.add(8);
dll.add(9);

dll.print();

// dll.remove();
// dll.addFirst(3);
// dll.removeFirst();
// dll.addAt(3,2);
dll.removeAt(2);
dll.print();
