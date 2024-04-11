class Solution {
    // function to convert a given Gray equivalent n to Binary equivalent.
    
    grayToBinary(n)
    {
        // code here
        let num = n.toString(2);
        let arr = num.split('');
        for(let i=0;i<arr.length;i++){
            arr[i]=arr[i]^arr[i-1];
        }
        return parseInt(arr.join(''),2);
    }
}