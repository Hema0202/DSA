class Solution {
    arrangeCV(head){
      //code here
      function isVowel(char) {
          return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
      }
  
      let vowelHead = new Node(-1);
      let consonantHead= new Node(-1);
      let vowelTail =vowelHead;
      let consonantTail= consonantHead;
  
      let current = head;
      while (current) {
          if (isVowel(current.data)) {
              vowelTail.next= current;
              vowelTail = vowelTail.next;
          } else {
              consonantTail.next = current;
              consonantTail = consonantTail.next;
          }
          current = current.next;
      }
  
      vowelTail.next = consonantHead.next;
      consonantTail.next = null; 
      
      return vowelHead.next;
      
    }
  }