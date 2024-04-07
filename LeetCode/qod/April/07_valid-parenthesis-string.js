/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = 0;
    let close = 0;
    const n = s.length;
    for(let i=0;i<n;i++){
        if(s[i]=='(' || s[i]=='*') open++;
        else open--;
        
       if(s[n-i-1] ==')' || s[n-i-1]=='*') close++;
        else close--;
        

        if(close< 0 || open < 0)
            return false;
        
       
    }
     return true;
};