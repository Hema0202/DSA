var getCommon = function(nums1, nums2) {
      
    let i = 0, j =0;
    while(i < nums1.length && j < nums2.length) {
        const min1 = nums1[i]
        const min2 = nums2[j]
        if(min1 == min2) return min1;
        if(min1 < min2) i++;
        else j++
    }
    return -1;
}