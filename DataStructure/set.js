//count the distinct element
function count(e){
    let set = new Set();
    for(let i=0;i<e.length;i++){
        set.add(e[i]);
    }
    let arr = Array.from(set);
    return arr;
}
console.log(count([1,5,8,4,3,4]));
