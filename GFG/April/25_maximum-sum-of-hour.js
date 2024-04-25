class Solution {
    //Function to find maximum sum submatrix.
    findMaxSum(n, m, mat)
    {
        //your code here
         let maxSum = -Infinity;

   
    for (let i = 0; i <= n - 3; i++) {
        for (let j = 0; j <= m - 3; j++) {
            
            let sum = 0;
            sum += mat[i][j] + mat[i][j + 1] + mat[i][j + 2];
            sum += mat[i + 1][j + 1];
            sum += mat[i + 2][j] + mat[i + 2][j + 1] + mat[i + 2][j + 2];
            maxSum = Math.max(maxSum, sum);
        }
    }

    if (maxSum === -Infinity) {
        return -1;
    }

    return maxSum;
    }
}