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
ll.print();
ll.remove();
ll.print();
