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
// function areSquaresEqual(arr1,arr2){
    
// }

// 933. Number of Recent Calls

// You have a RecentCounter class which counts the number of recent requests within a certain time frame.

// Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

 

// Example 1:

// Input
// ["RecentCounter", "ping", "ping", "ping", "ping"]
// [[], [1], [100], [3001], [3002]]
// Output
// [null, 1, 2, 3, 3]

// Explanation
// RecentCounter recentCounter = new RecentCounter();
// recentCounter.ping(1);     // requests = [1], range is [-2999,1], return 1
// recentCounter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
// recentCounter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
// recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
 

class RecentCounter{
    constructor(){
     this.data = [];
    }
 
    ping(e){
     this.data.push(e);
     while(this.data[0]<(e-3000)) this.data.shift();
     return this.data.length;
    }
 }
 

