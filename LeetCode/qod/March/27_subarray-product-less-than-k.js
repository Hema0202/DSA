/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//this is sliding window question with variable k;
var numSubarrayProductLessThanK = function(nums, k) {
    if(k<=1) return 0;
    let count =0;
    let l = 0;
    let product =1;

    for(let r=0;r<nums.length;r++){
        product *= nums[r];

        while(product>=k){
            product = product/(nums[l]);
            l++;
        }
        count += r-l+1;
    }
    return count;
};