// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// var mergeTwoLists = function (list1, list2) {
//     let head = new ListNode(0);
//     let cur = head;
//     while ((list1 != null) && (list2 != null)){
//          if(list2.val<list1.val){
//              cur.next = list2;
//              list2 = list2.next;
//              cur = cur.next;
//          }else{
//              cur.next = list1;
//              list1 = list1.next;
//              cur = cur.next;
//          }
//     }

//     if(list1!=null) cur.next = list1;
    
//     if(list2!=null) cur.next = list2;
   
//    head = head.next;
//    return head;
// };


// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

// var deleteDuplicates = function(head) {
//     let cur = head;
//     if(cur == null) return null;
//     while(cur.next != null){
//         if(cur.val == cur.next.val){
//             cur.next = cur.next.next;
//         }else{
//               cur = cur.next;
//         }
//     }
//     return head;
// };


// 141. Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

var hasCycle = function (head) {
    // if(head == null) return false;
    let s = head;
    let f = head;

    while ((f != null) && (f.next != null)) {
        s = s.next;
        f = f.next.next;
        if (s == f) return true;
    }
    return false;
};