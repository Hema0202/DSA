// The sliding window is a problem-solving technique that's designed to transform two nested loops into a single loop. It applies to arrays or lists. These problems are painless to solve using a brute force approach in O(n²) or O(n³). However, the sliding window technique can reduce the time complexity to O(n).
//contiguous array index element working with sliding window not alterate index of element
// sliding window has two of types

//              sliding-window
//                 /\
//                /  \
//               /    \
//              /      \
//          1.Fixed    2.variable
// 1.fixed: it means that value of k is fixed to achieve 
//          the target.
// 2. variable: it means that value of k is not fixed to 
//              achieve the target


function subArraySumOfSize(n,arr,k){
    let sum = 0;
    //first loop for k elements
    for(let i=0;i<k;i++){
        sum += arr[i];
    }
   //sum is assign to max
    let max = sum;
    
    //after k elements loop iterate
    for(let i=k;i<n;i++){
    //add next element in the subarray
        sum += arr[i];
    //remove first element in the subarray
        sum -= arr[i-k];
    //if sum is grater then max, then assign 
        if(sum>max) max=sum;
    }
    console.log(max);
    //if find the average.
    // console.log(max/k);
}

// const n= 5;
// const arr = [1,12,-5,-6,50];
// const k= 4;
// subArraySumOfSize(n,arr,k)


// 2. given an array of size n and target, find max length of sub-array that sums to target
// Ex1: n = 7, arr = [2, 3, 5, 1, 3, 2, 4], target = 8

// function maxLengthSubArrWithTareget(n, arr, target){
    //with the help of two pointer solving this problem l and r keep that two pointer on index 0
    // let l=0, sum=0, max=0;

    // for(let r=0;r<n;r++){
    //     sum += arr[r];
    

    //To decrease the size of window when sum is grater than target
//     while(sum > target){
//         sum -= arr[l];
//         l++;
//     }

//     if(sum == target){
//         let len = r-l+1;
//         if(len > max) max = len;
//     }
// }
//    console.log(max);
// }

// let n = 7, arr = [2,5,8,7,4,5,1,2], target = 8;

// maxLengthSubArrWithTareget(n, arr, target);


// / 3. given an array of size n and an integer k, find index of first 
// occurance of negative number in all subarrays of size k
// Ex1: n = 8, arr = [3, 5, -1, 3, -1, 4, 5, 6], k = 3;
// op1: [2, 2, 2, 4, 4, -1]

// function negInSubarray(n, arr, k){
//     let res = [];
//     for(let i=0;i<=n-k;i++){
//         for(let j=i;j<=i+k;j++){
//             if(arr[j]<=0){
//                 res.push(j);
//                 break;
//             }
//         }
//     }
//     console.log(res);
// }

//////////////////////////optimized code with sliding window

function negInSubarray(n, arr, k){
    let res=[];
    let last=-1;
    for(let i=0;i<=n-k;i++){
        if(i<= last) res.push(last);
        else{
            let isFound = false;
            for(let j=i;j<i+k;j++){
                if(arr[j]<0){
                    res.push(j);
                    last = j;
                    isFound = true;
                    break;
                }
            }
            if(!isFound){
                res.push(-1);
            }
        }
    }
    console.log(res);
}

// let n = 8, arr = [3, 5, -1, 3, -1, 4, 5, 6], k = 3;
// negInSubarray(n,arr,k);


// 4. Given an array of integers nums and a positive integer k,
// find the largest subarrays with k distinct numbers.

// Ex1: n = 11, arr = [3, 5, 6, 3, 3, 4, 5, 5, 5, 6, 7], k = 3;
// op1: 6

 
// function maxSizeSubArrWithDisNumber(n, arr, k){
//     let max = -1;
//     for(let i=0;i<n;i++) {
//         let set = new Set();
//         let count = 0;
//         for(let j=i;j<n;j++){
//             set.add(arr[j]);
//             count++;
//             if(set.size == k) max = Math.max(max, count);
//             else if(set.size > k) break;
//         }
//     }
//     console.log(max);
// }

// let n = 11, arr = [3, 5, 6, 3, 3, 4, 5, 5, 5, 6, 7], k = 3;

// maxSizeSubArrWithDisNumber(n, arr, k);


//////////////////////////optimized code with sliding window

function maxSizeSubArrWithDisNumber(n, arr, k){
    let max = -1, l=0, map = new Map();
    for(let r=0;r<n;r++){
        //Add element in map
        if(map.has(arr[r])) map.set(arr[r], map.get(arr[r] + 1));
        else map.set(arr[r], 1);

        //check if distinct element exceeds k
        if(map.size>k){
            while(map.size != k){
                map.set(arr[l], map.get(arr[l]) - 1);
                if(map.get(arr[l]) == 0) map.delete(arr[l]);
                l++;
            }
        }

        //check is size of map equals k
        if(map.size == k) max = Math.max(max, r-l+1);
    }
    console.log(max);
}


// let n = 11, arr = [3, 5, 6, 3, 3, 4, 5, 5, 5, 6, 7], k = 3;

// maxSizeSubArrWithDisNumber(n, arr, k);


// 5. Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// function lengthOfLongestSubstring(s) {
//     let max= 0;
//     for(let i=0;i<s.length;i++){
//         let set = new Set();
//         for(let j=i;j<s.length;j++){
//             if(set.has(s[j])) break;
//             set.add(s[j]);
//             max = Math.max(max, j-i+1);
//         }
//     }
//     console.log(max);
// }

//////////////////////////optimized code with sliding window


function lengthOfLongestSubstring(s){
    let set = new Set(), l=0, max = 0;
    for(let r=0;r<s.length;r++){
        while(set.has(s[r])){
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        max = Math.max(max, r-l+1);
    }
    console.log(max);
}

lengthOfLongestSubstring("abcabcbb");