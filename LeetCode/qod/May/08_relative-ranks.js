/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let score1 = [...score].sort((a,b)=>b-a);

    let map = new Map();
    for(let i=0;i<score1.length;i++){
        map.set(score1[i],i);
    }

    for(let i=0;i<score.length;i++){
        score[i]=""+(map.get(score[i]) + 1);
        if(score[i]==="1")  score[i]='Gold Medal';
        if(score[i]==="2")  score[i]='Silver Medal';
        if(score[i]==="3")  score[i]='Bronze Medal';
    }
    return score;
};