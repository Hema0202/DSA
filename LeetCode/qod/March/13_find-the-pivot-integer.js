/**
 * @param {number} n
 * @return {number}
 */

//the solution is 2 pointer approach
var pivotInteger = function(n) {
    let leftSum = 0;
    let rightSum = 0;
    let left =1;
    let right = n;

    while(left<right){
        if(leftSum < rightSum){
            leftSum = leftSum + left;
            left++;
        } else {
            rightSum = rightSum + right;
            right--;
        }
    }
    return leftSum === rightSum ? left : -1;
};