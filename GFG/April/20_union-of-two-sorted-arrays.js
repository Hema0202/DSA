class Solution {
    //Function to return a list containing the union of the two arrays. 
    findUnion(arr1, arr2, n, m)
    {
        //your code here
        const set1 = new Set(arr1);
        const set2 = new Set(arr2);

        const result = [...new Set([...set1, ...set2])];
        result.sort((a, b) => a - b);

        return result;
    }
}