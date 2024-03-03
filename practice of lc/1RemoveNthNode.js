// 19. Remove Nth Node From End of List

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;
    let temp1 = dummy, temp2 = dummy;
    for(let i=0;i<n;i++){
        temp1=temp1.next;
    }
   while(temp1.next != null){
       temp2 = temp2.next;
       temp1 = temp1.next;
   }
  
  temp2.next = temp2.next.next;
  return dummy.next
  };