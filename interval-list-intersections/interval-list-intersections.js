/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    let idx1 = 0;
    let idx2 = 0;
    let res = [];
    
    const intersection = (a,b)=>{
        if(a[1] < b[0] || a[0] > b[1]){
            return null;
        }
        let left = Math.max(a[0], b[0]);
        let right = Math.min(a[1], b[1]);
        return [left,right]
    };
    
    while(idx1 < firstList.length && idx2 < secondList.length){
        let temp = intersection(firstList[idx1], secondList[idx2]);
        if(temp){
            res.push(temp)
        }
        if(firstList[idx1][1] < secondList[idx2][1]){
            idx1++
        }else{
            idx2++
        }
    }
    return res;
};