/**
 * @param {number[]} deck
 * @return {number[]}
 */

var deckRevealedIncreasing = function (deck) {
    let res = [];
    deck.sort((a,b)=>b-a);
    while(deck.length){
        let first = deck.shift();
        let last =res.pop();
        if(last) res.unshift(last);
        res.unshift(first);
    } 
 
    return res;
};