var intersection = function(nums1, nums2) {
    let i=0,j=0;
    let set = new Set();
    nums1.sort((a,b) => a-b);
     nums2.sort((a,b) => a-b);
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]==nums2[j]){
           set.add(nums1[i])
            i++,j++
        }else if(nums1[i]<nums2[j]) i++
        else j++    
    }
  return Array.from(set);
};