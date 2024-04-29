class Solution {
    deleteK(head,k){
      //code here
    if (!head || k <= 0) {
          return head;
      }
    
     if(k===1){
         return null;
     }
    let dummy = new Node(0);
      dummy.next = head;
      let prev = dummy;
      let curr = head;
      let count = 0;
  
      while (curr) {
          count++;
          if (count % k === 0) {
              prev.next = curr.next; 
              curr = prev.next; 
          } else {
              prev = curr;
              curr = curr.next;
          }
      }
  
      return dummy.next;
     
    }
  }