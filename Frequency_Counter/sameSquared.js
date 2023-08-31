//Que:1 Give an array of size n.You have to calculate the frequency of all the elements of the array.

// Example: arr = [4, 6, 2, 8, 2, 6, 4, 2, 3]
// 4 --> 2
// 6 --> 2
// 2 --> 3
// 8 --> 8
// 3 --> 1

// let map = new Map();
// function frq(arr){
//  for(let i=0;i<arr.length;i++){
//        if(map.has(arr[i])){
//        let oldFrq = map.get(arr[i]);
//        let newFrq = oldFrq +1 ;
//        map.set(arr[i] , newFrq);
//     }
//     else{
//         map.set(arr[i], 1);
//     }
// }
// return map;
// }
// console.log(frq([4, 6, 2, 8, 2, 6, 4, 2, 3]));


//Que: 2 Given 2 arrays. First array consist of numbers and second array consist of squares. Check whether squares of all the number available in square array.

// Example: arr1 = [1, 2, 2, 4], arr2 = [4, 16, 4, 1]
// Sol: true
// Example: arr1 = [1,1,4,2,1,3], arr2 = [1, 1, 4, 16, 9, 9]
// Sol: false

//solution:1
// arr1 = [1, 2, 2, 4], arr2 = [4, 16, 4, 1]
// function areSquaresEqual(arr1,arr2){
// for(let e1 of arr1){
//     let available = false;
//     for(let e2 of arr2){
//         if(e1*e1==e2){
//             available=true;
//             break;
//         }
//     }
//     if(!available) return false;
// }
// return true;
// }
// console.log(areSquaresEqual(arr1, arr2));

// TimeComplexity = O(n^2), SpaceComplexity = O(1)


//solution:2
function areSquaresEqual(arr1,arr2){
    
}

