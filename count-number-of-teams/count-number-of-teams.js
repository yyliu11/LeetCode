/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res = 0;
    let dp1 = new Array(rating.length).fill(0);
    let dp2 = new Array(rating.length).fill(0);
    
    for(let i = 0;i<rating.length;i++){
        for(let k = i+1; k < rating.length; k++){
           if(rating[i] > rating[k]){
               dp2[i]++
           }else{
               dp1[i]++
           }
        }
    }
    
    for(let x = 0; x < rating.length - 2;x++){
        for(let y = x+1; y < rating.length; y++){
            if(rating[x] < rating[y]){
                res += dp1[y]
            }else{
                res+= dp2[y]
            }
        }
    }
    return res;
};

// const numTeams = (rating) => {
//     if(rating.length < 3) return 0;
//     let result = 0;

//     let greaterThan = new Array(rating.length).fill(0);
//     let lessThan = new Array(rating.length).fill(0);

//     for(let i = 0; i < rating.length; i++) {
//         for(let j = i + 1; j < rating.length; j++) {
//             if(rating[j] > rating[i]) {
//                 ++greaterThan[i];
//             } else if(rating[j] < rating[i]) {
//                 ++lessThan[i];
//             }
//         }
//     }
        
//     for(let i = 0; i < rating.length - 2; i++) {
//         for(let j = i + 1; j < rating.length; j++) {
//             if(rating[j] > rating[i]) {
//                 result += greaterThan[j];
//             } else if(rating[j] < rating[i]) {
//                 result += lessThan[j];
//             }
//         }
//     }

//     return result;    
// };