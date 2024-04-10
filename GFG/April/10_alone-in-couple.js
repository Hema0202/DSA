// **
//  * @param {number} n
//  * @param {number[]} arr
//  * @returns {number}
// */

class Solution{
    findSingle(n, arr){
        //code here
        // let map = new Map();
        // let oldFrq = 0;
        // for(let i=0;i<n;i++){
        //     if(map.has(arr[i])){
        //         oldFrq = map.get(arr[i]);
        //         let newFrq = oldFrq + 1;
        //         map.set(arr[i], newFrq);
        //     }
        //     else{
        //         map.set(arr[i],1);
        //     }
        // }
        // let singleVal;
        // for(let [k,v] of map){
        //     if(v==1){
        //         singleVal = k;
        //         break;
        //     }
        // }
        // return singleVal;
        
        //2nd approach
        let ans;
        for(let i=0;i<n;i++){
            ans = ans ^ arr[i];
        }
        return ans;
    }
}
