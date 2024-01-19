// sort Binary array
// let arr = [1,0,1,1,0,0];

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2]=temp;
}
//method 1: like quicksort pivot
// function sortBinaryArray(arr){
//     let l=0,r=arr.length-1;
//     while(l<r){
//         if(arr[l]==1){
//             swap(arr,l,r);
//             r--;
//         }else l++;
//     }
// }

//method 2: two pointer
// sortBinaryArray(arr);
// console.log(arr);

// function sortBinaryArray(arr){
//     let zeroes = 0,ones =0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==1) ones++;
//         else zeroes++;
//     }
//     let i=0;
//     while(zeroes>0){
//         arr[i]=0;
//         i++;
//         zeroes--;
//     }
//     while(ones>0){
//         arr[i]=1;
//         i++;
//         ones--;
//     }
// }
// let arr = [1,0,1,1,0,0];
// sortBinaryArray(arr);
// console.log(arr);

//method 1: like quicksort pivot
// function sort012(arr){
//     let l=0,r=arr.length-1,i=0;
//     while(i<=r){
//         if(arr[i]==2){
//             swap(arr,i,r);
//             r--;
//         }else if(arr[i]==0){
//             swap(arr,i,l);
//             l++;i++
//         }else i++;
//     }
// }


//method 2: two pointer
function sort012(arr){
    let z=0,o=0,t=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0) z++;
        else if(arr[i]==1) o++;
        else t++;
    }
    let i=0;
    while(z>0){
        arr[i]=0;
        i++;
        z--;
    }
    while(o>0){
        arr[i]=1;
        i++;
        o--;
    }
    while(t>0){
        arr[i]=2;
        i++;
        t--;
    }
}
let arr = [0, 2, 1, 2, 1, 0, 0, 1];

sort012(arr);
console.log(arr);