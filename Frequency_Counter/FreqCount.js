function frqCount(arr){
    let container = new Map();
    for(let i=0;i<arr.length;i++){
        if(container.has(arr[i])){
           let oldFrq = container.get(arr[i]);
           let newFrq = oldFrq + 1;
           container.set(arr[i],newFrq);
    
        }
        else{
            container.set(arr[i],1);
        }
    }
    return container;
}
console.log(frqCount([2,4,8,6,2,4,2,3]));