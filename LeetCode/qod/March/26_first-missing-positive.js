/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let num = 1;
    nums.sort((a,b)=>a-b);

    for(let i=0;i<nums.length;i++){
        if(nums[i]===num){
          num++;
        }
        else{
            continue;
        }
    }
    return num;
};