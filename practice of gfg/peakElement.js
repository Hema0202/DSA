// Peak element
// Given an 0-indexed array of integers arr[] of size n, find its peak element. An element is considered to be peak if it's value is greater than or equal to the values of its adjacent elements (if they exist).

// Note: The output will be 1 if the index returned by your function is correct; otherwise, it will be 0.

// Example 1:

// Input: 
// n = 3
// arr[] = {1, 2, 3}
// Peak element's index: 2
// Output: 
// 1
// Explanation: 
// If the index returned is 2, then the output printed will be 1. Since arr[2] = 3 is greater than its adjacent elements, and there is no element after it, we can consider it as a peak element. No other index satisfies the same property.


peakElement(arr, n)
{
    // code here
    let max = -Infinity;
    let index;
    for(let i=0;i<n;i++){
        if(arr[i]>max) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}