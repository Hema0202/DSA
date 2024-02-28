// 136. Single Number
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// ans:-
// var singleNumber = function(nums) {
//     let map =new Map();
//   let oldFrq = 0;
//   for(let i=0;i<nums.length;i++){
//    if(map.has(nums[i])){
//        oldFrq = map.get(nums[i]);
//        let newFrq =oldFrq +1;
//        map.set(nums[i], newFrq);
//    }
//    else  
//        (map.set(nums[i], 1))
//   }
 
//   let ans;

//   for(let [key, value] of map){
//    if(value === 1){
//        return key;
//    }
//   }
//   return ans;
// };


// ########################################new que #############################################

// 137. Single Number II

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

// ans:-

// var singleNumber = function(nums) {
//     let map =new Map();
//   let oldFrq = 0;
//   for(let i=0;i<nums.length;i++){
//    if(map.has(nums[i])){
//        oldFrq = map.get(nums[i]);
//        let newFrq =oldFrq +1;
//        map.set(nums[i], newFrq);
//    }
//    else  
//        (map.set(nums[i], 1))
//   }
 
//   let ans;

//   for(let [key, value] of map){
//    if(value === 1){
//        return key;
//    }
//   }
//   return ans;
// };


// ########################################new que #############################################

// 260. Single Number III

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

// Example 1:

// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.
// Example 2:

// Input: nums = [-1,0]//////
// Output: [-1,0]
// Example 3:

// Input: nums = [0,1]
// Output: [1,0]
 

// ans:-

// var singleNumber = function(nums) {
//     let arr=[]
//      let map =new Map();
//    let oldFrq = 0;
//    for(let i=0;i<nums.length;i++){
//     if(map.has(nums[i])){
//         oldFrq = map.get(nums[i]);
//         let newFrq =oldFrq +1;
//         map.set(nums[i], newFrq);
//     }
//     else  
//         (map.set(nums[i], 1))
//    }
  

//    for(let [key, value] of map){
//     if(value === 1){
//        arr.push(key)
//     }
//    }
//    return arr;
// };