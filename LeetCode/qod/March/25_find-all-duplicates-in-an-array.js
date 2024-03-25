/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let map = new Map();
    let oldFrq = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            oldFrq = map.get(nums[i]);
            let newFrq = oldFrq + 1;
            map.set(nums[i], newFrq);
        }
        else{
            map.set(nums[i],1);
        }
    }
     let duplicateElement= [];
    for(let [e,v] of map){
       if(v>=2){
        duplicateElement.push(e);
       } 
    }
    return duplicateElement;
};