// Minimum Difference Between Highest and Lowest of K Scores

var minimumDifference = function(nums, k) {
    let min = Infinity;
    nums.sort((a,b)=>a-b)
    let l = 0, r = k-1;
    while(r<nums.length){
        let diff = nums[r]-nums[l];
        if(diff<min) min = diff;
        r++,l++;
    }
    return min;
};