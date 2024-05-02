/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let arr = word.split('');
    let newArr = [];
    let newArr1 = [];
    let index = word.indexOf(ch);
    
    if(index==-1){
        return word;
    }

    for(let i=0;i<=index;i++){
      newArr.push(word[i]);
    }

    for(let i=newArr.length-1;i>=0;i--){
       newArr1.push(newArr[i]);
    }
    let arr1 = newArr1.concat(arr.slice(index+1));
    return arr1.join('');
};