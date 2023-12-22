function frqCount(arr){
    let container = new Map();
    let i;
    for( i=0;i<arr.length;i++){
        if(container.has(arr[i])){
           let oldFrq = container.get(arr[i]);
           let newFrq = oldFrq + 1;
           container.set(arr[i],newFrq);
    
        }
        else{
            container.set(arr[i],1);
        }
    }
    for(let [key,value] of container){
        if(value>1){
            container.delete(key);
        }
        return key;
    }
   
}
// console.log(frqCount([2,4,8,6,2,4,2,3]));
console.log(frqCount([2,5,7,8,5,2,8]))


