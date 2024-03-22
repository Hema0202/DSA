/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return false;

    let reverseList = (node) => {
        let prev = null;
        while(node){
            let next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return prev;
    }
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    let reverse = reverseList(slow);
    while(reverse){
        if(head.val != reverse.val) return false;
        head = head.next;
        reverse = reverse.next;
    }
    return true;
};