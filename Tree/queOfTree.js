// Binary Tree Preorder Traversal
// var preorderTraversal = function(root) {
//     let arr = [];
//     function traverse(root){
//         if(root == null) return;
//         arr.push(root.val);
//         traverse(root.left);
//         traverse(root.right);
//     }
//     traverse(root);
//     return arr;
//  };


// Binary Tree Postorder Traversal
// var postorderTraversal = function(root) {
//     let arr = [];
//     function traverse(root){
//     if(root == null) return;
//     traverse(root.left);
//     traverse(root.right);
//     arr.push(root.val)
//     }
//     traverse(root);
//     return arr;
// };

// Binary Tree Inorder Traversal
// var inorderTraversal = function(root) {
//     let arr = [];
//     function traverse(root){
//         if(root == null) return;
//         traverse(root.left);
//         arr.push(root.val);
//         traverse(root.right);
//     }
//     traverse(root);
//     return arr;
// };

// Maximum Depth of Binary Tree/height of tree
// var maxDepth = function(root) {
//     if(root == null) return 0;
//     let l = maxDepth(root.left);
//     let r = maxDepth(root.right);
//     return Math.max(l,r)+1;
// };


// Same Tree
// var isSameTree = function(p, q) {
//     if(p==null && q==null) return true;
//     if(p==null || q==null) return false;
//     if(p.val != q.val) return false;
//     let l = isSameTree(p.left,q.left);
//     if(l==false) return false;
//     let r = isSameTree(p.right,q.right);
//     if(r==false) return false;
//     return true;
//  };

// Symmetric Tree
// var isSymmetric = function(root) {
//     function mirrorEffect(p,q){
//         if(p==null && q==null) return true;
//         if(p==null || q==null) return false;
//         if(p.val!=q.val) return false;
//         let l = mirrorEffect(p.left,q.right);
//         let r = mirrorEffect(p.right,q.left);
//         return l && r;
//     }
//     return mirrorEffect(root,root);
// };


// Balanced Binary Tree/height ki diff 1 ya 0 honi chahiye usse jyada ho to false
// var isBalanced = function(root) {
//     function balance(root){
//       if(root==null) return [0,true];
//       let [height1,balanceLeft] = balance(root.left);
//       let [height2,balanceRight] = balance(root.right);
//       if(!balanceLeft) return [height1,false];
//       if(!balanceRight) return [height2,false];
//       if(Math.abs(height1-height2)>1) return [height1,false];
//       return [Math.max(height1,height2)+1,true] 
//     }
//    let [h,res] = balance(root);
//    return res;
// };

//max tree
// function maxTree(root){
//     if(root == null) return -Infinity;
//     let l = maxTree(root.left);
//     let r = maxTree(root.right);
//     return Math.max(l,root.val,r);
// }


//min tree
// function minTree(root){
//     if(root == null) return Infinity;
//     let l = minTree(root.left);
//     let r=minTree(root.right);
//     return Math.min(l,root,r);
// }


//height of tree
// function heightOfTree(root){
//     if(root==null) return 0;
//     let l=heightOfTree(root.left);
//     let r= heightOfTree(root.right);
//     return Math.max(l,r)+1;
// }

//sum of tree
function sumOfTree(root){
    if(root==null) return 0;
    let l=sumOfTree(root.left);
    let r=sumOfTree(root.right);
    return l+r+root.val;
}
