class Solution {
    
    deleteNode(del_node)
    {
        //your code here
        if(!del_node || !del_node.next){
            return;
        }
        
         del_node.data = del_node.next.data
            del_node.next = del_node.next.next
    }
}