// 3005. Count Elements With Maximum Frequency

var maxFrequencyElements = function(nums) {
    let container = new Map();
     for(let i=0;i<nums.length;i++){
         if(container.has(nums[i])){
            let oldFrq = container.get(nums[i]);
            let newFrq = oldFrq + 1;
            container.set(nums[i],newFrq);
         }
         else{
             container.set(nums[i],1);
         }
     }  
     let n = -Infinity;
     for(let [k,v] of container){
        if(v>n) n=v;
     }
     let count =0;
     for(let [k,v] of container){
        if(v==n) count+=v;
     }
 
   return count;     
 };