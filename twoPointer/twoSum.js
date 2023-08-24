//Method:-1
// function twoSum(arr, x){
//      for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==x) return [i,j]
//         }
//      }
//      return [-1,-1]
// }
// // console.log(twoSum([1,2,3,4,5,6,7,8,9], 11));
// console.log(twoSum([1,6,9,12,17,23,50],35));
//timeComplexity: O(n^2), spaceComplexity:O(1)


//Method:-2
// function twoSum(arr,x){
//     let map = new Map();
//     for(let i=0;i<arr.length;i++){
//         if(map.has(x-arr[i])){
//            let j=map.get(x-arr[i]);
//            return [j,i];
//         }
//         else{
//             map.set(arr[i],i);
//         }
//     }
// }
// console.log(twoSum([1,2,3,4,5,6,7,8,9], 11));
//timeCOmplexity:- O(n) spaceComplexity:-O(n)

//method:-3
// function twoSum(arr,x){
//     let i=0,j=arr.length-1;
//     while(i<j){
//        let sum = arr[i]+arr[j];
//        if(sum==x) return [i,j];
//        else if(sum<x) i++;
//        else j--;
//     }
//     return [-1,-1]
// }
// console.log(twoSum([1,2,3,4,5,6,7,8,9], 11));
//This method works on sorted array,
//timeCOmplexity:- O(n) spaceComplexity:-O(1)

