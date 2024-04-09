/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let res = 0; 
    let i=0;
    while(tickets[k]!==0){
        if(tickets[i]){
            tickets[i]--;
            res++;
        }
        if(i<tickets.length) i++;
        else i=0;
    }
    return res;
};