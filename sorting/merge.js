//merge sort questions


//merge two array in asc order


// function merge2Arr(arr1,arr2){
//     let newArr = [];
//     let x=0,y=0;

//     while(x<arr1.length && y<arr2.length){
//         if(arr1[x]<=arr2[y]){
//             newArr.push(arr1[x]);
//             x++;
//         }
//         else{
//             newArr.push(arr2[y]);
//             y++;
//         }
//     }
//     while(x<arr1.length){
//         newArr.push(arr1[x]);
//         x++;
//     }
//     while(y<arr2.length){
//         newArr.push(arr2[y]);
//         y++;
//     }
//     return newArr;
// }
// arr1 = [2,5,6,8], arr2=[3,5,6,7,12,15]
// console.log(merge2Arr(arr1,arr2));


// You are given an array arr containing integers, and the index of its middle element is provided as mid. Write a program or function to sort the elements of the array based on the given middle index.


// function sort(arr,mid){
//     let arr1=[];
//     let arr2 = [];
//     let x=0,y=0;

//     for(let i=0;i<mid;i++){
//         arr1.push(arr[i]);
//     }
//     console.log(arr1);

//     for(let i=mid;i<arr.length;i++){
//         arr2.push(arr[i]);
//     }
//     console.log(arr2);
    
//     let i=0;
//     while(x<arr1.length && y<arr2.length){
//         if(arr1[x]<=arr2[y]){
//             arr[i]=arr1[x];
//             i++;
//             x++;
//         }
//         else{
//             arr[i]=arr2[y];
//             i++;
//             y++;
//         }
//     }
//     while(x<arr1.length){
//         arr[i]=arr1[x];
//         i++;
//         x++;
//     }

//     while(y<arr2.length){
//         arr[i]=arr2[y];
//         i++;
//         y++;
//     }

//     return arr;
// }

// let arr = [2, 5, 6, 8, 3, 5, 6, 7, 12, 15];

// console.log(sort(arr,4))


// Consider an array arr with elements [2, 5, 8, 9, 1, 5, 6, 7, 2, 3, 6, 8, 1, 11, 8, 3]. Given indices start = 4, mid = 8, and end = 11, design a program or function to sort only the elements in the specified range [start, end], inclusive, based on the element at the middle index mid. The sorting should be such that the elements to the left of the middle index are in ascending order, and the elements to the right of the middle index are also in ascending order.


let arr = [2, 5, 8, 9, 1, 5, 6, 7, 2, 3, 6, 8, 1, 11, 8, 3];
let start = 4;
let mid = 8;
let end = 11;

function midElementSort(arr,start,mid,end){
    let arr1=[];
    let arr2=[];

    let x=0;
    let y=0;
    let i=start;

for(let i=start;i<mid;i++){
    arr1.push(arr[i]);
}

for(let i=mid;i<=end;i++){
    arr2.push(arr[i]);
}

while(x<arr1.length && y<arr2.length){
    if(arr1[x]<=arr2[y]){
        arr[i]=arr1[x];
        i++,x++;
    }
    else{
        arr[i]=arr2[y];
        i++,y++;
    }
}

while(x<arr1.length){
    arr[i]=arr1[x];
    i++,y++;
}

while(y<arr2.length){
    arr[i]=arr2[y];
    i++,y++;
}

return arr;

}
console.log(midElementSort(arr,start,mid,end));

