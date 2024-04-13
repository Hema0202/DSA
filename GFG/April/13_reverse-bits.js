
class Solution {
    reversedBits(x){
       //code here
       let res = 0;
        let y = 2147483648;

        while (x > 0) {
            if (x % 2 === 1) res += y;
            x = Math.floor(x / 2);
            y = Math.floor(y / 2);
        }

        return res;
    }
}