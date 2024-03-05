var minimumLength = function(s) {
    let l=0, r = s.length-1;
    while(l<r){
        if(s[l]!=s[r]){
           return r-l+1;
        }
       else{
           l++, r--;
           while((l<=r) && (s[l]==s[l-1])) l++;
           while((l<=r) && (s[r]==s[r+1])) r--;
       }
    }
    return r-l+1;
 };