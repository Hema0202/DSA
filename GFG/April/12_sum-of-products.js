// class Solution {
//     // Function to pair and sum the elements of the array.
//     pairAndSum(n, arr) {
//         // your code here
//         let bits = new Array(32).fill('0');
//         for(let e of arr){
//             let i = 0;
//             while(e>0){
//                 if(e%2 ==1) bits[i]++;
//                 e = parseInt(e/2);
//                 i++;
//             }
//         }
        
//         let res = 0, i = 1;
//         for(let e of bits){
//             res+=i*e*(e-1)/2;
//             i*=2;
//         }
//         return res;
//     }
// }


//2nd approach
class Solution {
    // Function to pair and sum the elements of the array.
    pairAndSum(n, arr) {
        // your code here
        let bits = new Array(32).fill('0');
        for(let e of arr){
            let i = 0;
            while(e>0){
                if(e&1 ==1) bits[i]++;
                e>>=1;
                i++;
            }
        }
        
        let res = 0, i = 1;
        for(let e of bits){
            res+=i*e*(e-1)/2;
            i*=2;
        }
        return res;
    }
}

//explanation
// example:-
// Example 1:

// Input:
// n = 3
// arr = {5, 10, 15}
// Output:
// 15
// Explanation:
// The bitwise Ands of all pairs where i<j are (5&10) = 0, (5&15) = 5 and (10&15) = 10.
// Therefore, the total sum = (0+5+10) = 15.

// 5  -->  0 1 0 1
// 10 -->+ 1 0 1 0
// 15 -->+ 1 1 1 1
// ---------------
//         1 1 1 1


// Example 2:

// Input:
// n = 4
// arr = {10, 20, 30, 40}
// Output:
// 46
// Explanation:
// The sum of bitwise Ands 
// of all pairs = (0+10+8+20+0+8) = 46.


// 10 --> 0 0 1 0 1 0
// 20 --> 0 1 0 1 0 0
// 30 --> 0 1 1 1 1 0
// 40 --> 1 0 1 0 0 0          

//hand shaking formula n*(n-1)/2
// 32*(1*(1-1)/20) + 16*(2*(2-1)/2) + 8*(3*(3-1)/2) + 4*(2*(2-1)/2) + 2*(2*(2-1)/2) +1*0