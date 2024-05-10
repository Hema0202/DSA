/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let fra = [];
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            fra.push([arr[i]/arr[j], arr[i], arr[j]])
        }
    }
    fra.sort((a,b) =>a[0]-b[0]);
    return [fra[k-1][1], fra[k-1][2]];
};