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
var sumOfLeftLeaves = function(root) {
    const sumLeftLeaves = (node, isLeft) => {
        if (!node) return 0;

        let sum = 0;

        if (isLeft && !node.left && !node.right) {
            sum += node.val;
        } else {
            sum += sumLeftLeaves(node.left, true);
            sum += sumLeftLeaves(node.right, false);
        }

        return sum;
    };

    return sumLeftLeaves(root, false);
};