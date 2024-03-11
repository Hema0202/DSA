var customSortString = function(order, s) {
    let newArr = [];
     let orderArr = order.split('');
     let str = s.split('');
    for(let i=0;i<orderArr.length;i++){
        for(let j=0;j<str.length;j++){
            if(orderArr[i]==str[j]){
                newArr.push(orderArr[i]);
            }
        }
    }
 
    for(let e of str){
        if(!order.includes(e)){
            newArr.push(e);
        }
    }
    return newArr.join('');
 };