
class Solution {
    findMissing(a,b,n,m){
        //code here
        let setB = new Set(b);
        let newArr = [];
        for(let i=0;i<n;i++){
            if(!setB.has(a[i])){
                newArr.push(a[i]);
            }
        }
        return newArr;
    }
}