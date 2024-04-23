class Solution {
    /**
    * @param number n

    * @returns number
    */
    firstElement(n) {
        // code here
         if (n ===1) {
            return 1;
        }
        if(n<1){
            return 0;
        }
        let a=1, b=1;
        let mod = 1000000007;
        let c;
        for(let i=0;i<n-2;i++){
            c=(a+b)%mod;
            a=b;
            b=c;
        }
        return c%mod;
    }
}