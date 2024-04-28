/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let maxOne = -Infinity;
    let maxTwo = -Infinity;
    let maxThree = -Infinity;

    for(let n of nums){
        if(n===maxOne || n===maxTwo || n===maxThree) 
        continue;
        if(maxOne < n){
            maxThree = maxTwo;
            maxTwo = maxOne;
            maxOne = n;
        }
        else if(maxTwo < n){
            maxThree = maxTwo;
            maxTwo = n;
        }
        else if(maxThree < n){
            maxThree =n;
        }
    }
    if(maxThree === -Infinity){
        return maxOne;
    }
    else{
        return maxThree;
    }
};