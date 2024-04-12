/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let l = 0;
    let r = height.length-1;
    let leftMax = 0;
    let rightMax = 0;
    let res = 0;
    while(l<r){
    leftMax = Math.max(height[l],leftMax);
    rightMax = Math.max(height[r],rightMax);
    let min = Math.min(leftMax, rightMax);
    if(height[l]<height[r]) {
        min = min - height[l];
        res+=min;
        l++;
    } else {
        min = min - height[r];
        res+=min;
        r--;
      }
    }
    return res;
};