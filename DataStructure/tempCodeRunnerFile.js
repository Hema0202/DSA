function count(e){
    let set = new Set();
    for(let i=0;i<e.length;i++){
        set.add(e[i]);
    }
}
console.log(count('abcdecdb'));