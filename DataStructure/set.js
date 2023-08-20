//count the distinct numbers
// function count(e){
//     let set = new Set();
//     for(let i=0;i<e.length;i++){
//         set.add(e[i]);
//     }
//     let arr = Array.from(set);
//     return arr;
// }
// console.log(count([1,5,8,4,3,4]));


//count the distinct character
// function count(e){
//     let set = new Set();
//     for(let i=0;i<e.length;i++){
//         set.add(e[i]);
//     }
//     return set;
// }
// console.log(count('abcdecdb'));


//count the size of distinct element
// function count(e){
//     let set = new Set();
//     for(let i=0;i<e.length;i++){
//         set.add(e[i]);
//     }
//     return set.size;
// }
// console.log(count("abcdbce"));


//count the size of distinct number
function count(e){
      let set = new Set();
      for(let i=0;i<e.length;i++){
        set.add(e[i]);
      }
      let arr = Array.from(set);
      return arr.length;
}
console.log(count([1,2,5,3,2,3]));