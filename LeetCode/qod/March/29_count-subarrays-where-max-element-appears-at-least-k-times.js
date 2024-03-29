/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let max = Math.max(...nums);
    let count = 0;
    let res = 0;
    let left = 0;
    let right = 0;

    while(right<nums.length){
        if(nums[right]===max){
            count+=1;
        }
        while(count>=k){
            res+=nums.length-right;
            if(nums[left]===max){
                count-=1;
            }
            left+=1;
        }
        right+=1;
    }
    return res;
};