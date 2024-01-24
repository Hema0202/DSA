// let map = new Map();
// map.set('name','hema');
// map.set('age',23);
// console.log(map);


//question

// 645. Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

// var findErrorNums = function (nums) {
//     let map = new Map();
//     let oldFrq = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             oldFrq = map.get(nums[i]);
//             let newFrq = oldFrq + 1;
//             map.set(nums[i], newFrq);
//         }
//         else{
//             map.set(nums[i],1);
//         }
//     }
//     let duplicateElement =0;
//     for(let [e,v] of map){
//        if(v>1){
//         duplicateElement = e;
//        } 
//     }
    
//     let missing =0;
//     for(let i=1;i<=nums.length;i++){
//         if(!map.has(i)){
//             missing = i;
//         }
//     }
//     return [duplicateElement , missing];
// };


// 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

// var firstUniqChar = function (s) {
//     let map = new Map();
//     let oldFrq = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             oldFrq = map.get(s[i]);
//             let newFrq = oldFrq + 1;
//             map.set(s[i], newFrq);
//         }
//         else {
//             map.set(s[i], 1);
//         }
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (map.get(s[i]) == 1) return i;

//     }
//     return -1;
// };