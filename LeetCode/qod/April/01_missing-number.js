/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // s = s.trim();
    // let arr= s.split(' ');
    // let word = arr[arr.length-1];
    // return word.length;

    let count =0;
    let i= s.length-1;
    while(s[i]==" ") i--;
    while(s[i]!=" " && i>=0){
        count++;
        i--;
    }
    return count;
};