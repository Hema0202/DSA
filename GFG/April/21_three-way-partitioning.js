class Solution {
    //Function to partition the array around the range such 
    //that array is divided into three parts.
    threeWayPartition(arr, a, b)
    {
        //your code here
        let n = arr.length;
        let start = 0;
        let end = n - 1;
        for (let i = 0; i <= end;) {
            if (arr[i] < a) {
                // Swap arr[i] with arr[start]
                let temp = arr[i];
                arr[i] = arr[start];
                arr[start] = temp;
                i++;
                start++;
            } else if (arr[i] > b) {
                // Swap arr[i] with arr[end]
                let temp = arr[i];
                arr[i] = arr[end];
                arr[end] = temp;
                end--;
            } else {
                i++;
            }
        }
        return 1;
    }
}