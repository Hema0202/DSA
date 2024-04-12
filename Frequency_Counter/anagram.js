//Method-1 : valid anagram

map.set(e, (map.get(e) || 0) + 1);

function isAnagram(s, t) {
    if (s.length != t.length)
        return false;
    let map1 = new Map();
    let map2 = new Map();
    for (let key of s) {
        if (map1.has(key)) {
            let oldFrq = map1.get(key);
            let newFrq = oldFrq + 1;
            map1.set(key, newFrq);
        }
        else {
            map1.set(key, 1);
        }
    }
    for (let key of t) {
        if (map2.has(key)) {
            let oldFrq = map2.get(key);
            let newFrq = oldFrq + 1;
            map2.set(key, newFrq);
        }
        else {
            map2.set(key, 1);
        }

    }
    for (let [key1, value1] of map1) {
        let value2 = map2.get(key1);
        if (value1 != value2)
            return false;
    }
    return true;
}
console.log(isAnagram("abcdbc", "abbccd"));


//Method-2 : valid anagram

// function isAnagram(s,t){
//     let map = new Map();
//     for(let char of s){
//         if(map.has(char)){
//             let oldFrq = map.get(char);
//             let newFrq = oldFrq +1;
//             map.set(char, newFrq)
//         }
//         else{
//             map.set(char, 1);
//         }
//     }
//     for(let char of t){
//         if(map.has(char)){
//             let oldFrq = map.get(char); 
//             let newFrq = oldFrq - 1;
//             map.set(char, newFrq);
//         }
//         else{
//             return false;
//         }
//     }
//     for(let [key, value] of map){
//         if(value != 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isAnagram("abcdac","aabccd"));