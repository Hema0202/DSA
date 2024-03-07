function removeMinElements(arr, k){
    arr.sort((a,b) =>a-b);
    let count =0;
    for(let i=arr.length-1;i>=0;i--){
      if(k>arr[i]){
        // arr.splice(i,1);
        count++;
      }
    }
    console.log(count);
}

let arr =[2,3,5,8,6,7,9,3,5,4], k=7;
removeMinElements(arr,k);
