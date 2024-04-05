/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let res=[];
    for(let i=0;i<s.length;i++){
        if(res.length>0 && Math.abs(res[res.length-1].charCodeAt()-s[i].charCodeAt())===32){
            res.pop();
        } else{
            res.push(s[i]);
        }
    }
    return res.join("");
};