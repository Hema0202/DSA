/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
            count++;
        } else {
            if (stack.length === 0) return false;
            let ch = stack.pop();
            if ((s[i] === ')' && ch === '(') || (s[i] === ']' && ch === '[') || (s[i] === '}' && ch === '{')) {
            } else {
                return false;
            }
            count--;
        }
    }
    return count === 0;
};