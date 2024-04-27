/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    if(nums.length<3) return res;
    nums=nums.sort((a,b)=>a-b);
    let temp =0;
    for(let i=0;i<nums.length-2;i++){
        if(nums[i]>temp) break;
        if(i>0 && nums[i]===nums[i-1]) continue;
        let m = i+1
        let n=nums.length-1;
        while(m<n){
            let sum = nums[i]+nums[m]+nums[n];
            if(sum===temp){
                res.push([nums[i],nums[m],nums[n]])
                 while(nums[m] === nums[m+1]) m++;
                 while(nums[n] === nums[n-1]) n--;
                 m++;
                 n--;
            }
            else if(sum<temp){
                m++
            }
            else{
                n--
            }
        }
    }
    return res;
};