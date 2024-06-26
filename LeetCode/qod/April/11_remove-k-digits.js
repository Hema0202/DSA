/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = ["0"];
    for(let i=0;i<num.length;i++){
        while(k>0 && stack[stack.length-1]>num[i]){
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while(k>0){
       stack.pop();
       k--;
    }
    while((stack.length > 0)  && (stack[0]=="0")){
       stack.shift();
    }
    if(stack.length == 0) return "0";
  return stack.join('');
};