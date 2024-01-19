//Bubble sort

// function bubbleSort(arr){
//     let n = arr.length;

//     for(let i=n-1;i>0;i--){
//         for(let j=1;j<=i;j++){
//             if(arr[j-1]>arr[j]) swap(arr,j-1,j);
//         }
//     }
// }

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2]=temp;
}
// let arr = [5,3,2,6,8,9,7];
// bubbleSort(arr);
// console.log(arr);


// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         for(let j=i;j>0;j--){
//             if(arr[j-1]>arr[j]) swap(arr, j-1,j);
//             else break;
//         }
//     }
// }

// let arr = [5,3,2,6,8,9,7];
// insertionSort(arr);
// console.log(arr);

// function selectionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex =i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[minIndex]>arr[j])
//             minIndex = j;
//         }
//         swap(arr,i,minIndex)
//     }
// }
// let arr = [5,3,2,6,8,9,7];
// selectionSort(arr);
// console.log(arr);


// function merge(arr,start,mid,end){
//     let leftArr = [];
//     let rightArr = [];
//     let i=start;
//     let r=0,l=0;

//     //copy left part in leftArr
//     for(let i=start;i<mid;i++) leftArr.push(arr[i]);

//     //copy right part in rightArr
//     for(let i=mid;i<=end;i++) rightArr.push(arr[i]);

//     //find min and push in original arr
//     while(l<leftArr.length && r<rightArr.length){
//         if(leftArr[l]<=rightArr[r]){
//             arr[i]=leftArr[l];
//             i++;
//             l++;
//         }
//         else{
//             arr[i]=rightArr[r];
//             i++;
//             r++;
//         }

//         //add remaining elements from leftArr to original arr
//         while(l<leftArr.length){
//             arr[i]=leftArr[l];
//             i++;
//             l++;
//         }

//         //add remaining elements from rightArr to original arr
//         while(r<rightArr.length){
//             arr[i]=rightArr[r];
//             i++;
//             r++;
//         }
//     }
// }

// function mergeSort(arr,start,end){
//     if(start<end){
//         let mid = start + Math.ceil((end-start)/2);

//         mergeSort(arr,start,mid-1);
//         mergeSort(arr,mid,end);
//         merge(arr,start,mid,end);
//     }
// }

// let arr = [5,3,2,6,8,9,7];
// mergeSort(arr,0,arr.length-1);
// console.log(arr);


// function pivot(arr,start,end){
//     let l=start;
//     let r= end-1;
   
//     while(l<=r){
//         if(arr[l]>arr[end]){
//             swap(arr,l,r);
//             r--;
//         }
//         else{
//             l++;
//         }
//     }

//     swap(arr,r+1,end);
//     return r+1;
// }

// function quickSort(arr,start,end){
//     if(start<end){
//         let pi = pivot(arr,start,end);

//         quickSort(arr,start,pi-1);
//         quickSort(arr,pi+1,end);
//     }
// }

// let arr = [5,3,2,6,8,9,7];
// quickSort(arr,0,arr.length-1);
// console.log(arr);