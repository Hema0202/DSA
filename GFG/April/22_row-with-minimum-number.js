class Solution {
    //Function to find the row of first index containing 1.
    minRow(n, m, a)
    {
        //your code here
       let ans = -1, min = m+1;
       for(let i=0;i<n;i++){
           let curr = 0;
           for(let j=0;j<m;j++){
               if(a[i][j]==1){
                   curr++;
               }
           }
           if(curr<min || (curr===min && ans===-1)){
               min=curr;
               ans=i+1;
           }
       }
       return ans;
    }
}