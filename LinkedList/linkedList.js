class Node {
    constructor(val){
        this.val =val;
        this.next = null;
    }  
}
class LinkedList{
     constructor(){
        this.head = null;
        this.size = 0;
     }   

     add(element){
        let node = new Node(element);
        if(this.head == null){
            this.head = node;
        } else{
            let cur = this.head;
            while(cur.next != null){
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
     }

     remove(){
        if(this.head == null){
            console.log('Linked list is empty');
            return;
        }
        if(this.head.next == null){
            this.head = null;
        }else{
            let cur = this.head;
            while(cur.next.next != null){
                cur = cur.next;
            }
            cur.next = null;
        }
        this.size--;
     }

     addFirst(element){
        let node = new Node(element);
        node.next = this.head;
        this.head = node;
        this.size++;
     }

     removeFirst(){
        if(this.head == null){
            console.log("The linked list is already empty.");
            return null;
        }else{
            this.head=this.head.next;
            this.size--;
        }
     }


     addAt(element,index){
        if(index >= this.size) this.add(element);
        else if(index==0) this.addFirst(element);
        else{
            let node = new Node(element);
            let cur= this.head;
            let loopCount = index-1;
            while(loopCount>0){
                cur = cur.next;
                loopCount--;
            }
            let temp =cur.next;
            cur.next = node;
            node.next = temp;

            this.size++;
        }
     }

    
    removeAt(index){
        if(index<0 || index>=this.size){
            console.log('Invalid index');
            return;
        }else if(index==0) this.removeFirst();
        else{
            let loopCount = index-1;
            let cur =this.head;
            while(loopCount>0){
                cur = cur.next;
                loopCount--;
            }

            cur.next = cur.next.next;
            this.size--;
        }
    }

    reverse(){
        let prev = null;
        let cur = this.head;
        while(cur != null){
            let next = cur.next;
            cur.next= prev;
            prev = cur;
            cur=next;
        }
        this.head = prev;
    }

     print(){
        let cur = this.head;
        let s='';
        while(cur != null){
            s+=cur.val+"->";
            cur = cur.next;
        }
        s+=null;
        console.log(s);
     }
}
let ll = new LinkedList();

ll.add(5);
ll.add(2);
ll.add(3);
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

module.exports= LinkedList;