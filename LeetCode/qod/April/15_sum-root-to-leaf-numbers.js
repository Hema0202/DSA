/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum =0;
    function calculateSum(node, currSum){
     if(node === null) return 0;
     currSum = currSum *10 + node.val;
     if(node.left == null && node.right == null){
         return currSum;
     }
     return calculateSum(node.left, currSum) + calculateSum(node.right, currSum)
    }
    return calculateSum(root, 0);
 };