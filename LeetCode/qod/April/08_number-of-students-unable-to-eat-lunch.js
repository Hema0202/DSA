/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    // let count = [0,0];
    
    // for(let student of students){
    //     if(student === 0){
    //         count[0]++;
    //     }
    //     else{
    //         count[1]++;
    //     }
    // }

    // for(let sandwich of sandwiches){
    //     if(sandwich === 0){
    //         if(count[0]>0){
    //             count[0]--;
    //         }
    //         else{
    //             return count[1];
    //         }
    //     }
    //     else{
    //         if(count[1]>0){
    //             count[1]--;
    //         }
    //         else {
    //             return count[0];
    //         }
    //     }
    // }

    // return count[0]+count[1];


    //2nd approach
    let count = 0;
    let i=0;
    let n = students.length;
    while(i<=students.length){
        if(students[0] === sandwiches[0]){
            students.shift();
            sandwiches.shift();
            i=0;
            count++;
        }
        else{
            let temp = students.shift();
            students.push(temp);
        }
        i++;
    }
    return n-count;
};