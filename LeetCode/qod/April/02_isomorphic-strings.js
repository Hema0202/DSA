/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length){
        return false;
    }

    let smap = new Map();
    let tmap = new Map();

    for(let i=0;i<s.length;i++){
        let schar = s[i];
        let tchar = t[i];
        if(!smap.has(schar)){
            smap.set(schar, tchar);
        }
        else if(smap.get(schar) !== tchar){
            return false;
        }

        if(!tmap.has(tchar)){
            tmap.set(tchar,schar);
        }
        else if(tmap.get(tchar) != schar){
            return false;
        }
    }
    return true;
};