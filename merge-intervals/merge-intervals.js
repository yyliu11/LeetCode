/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0]);
    var output = [];
    var temp = intervals[0];
    for(var i = 1; i < intervals.length; i++){
        if(temp[1] >= intervals[i][0] && temp[1] < intervals[i][1]){
            temp[1] = intervals[i][1]
        }else if(temp[1] >= intervals[i][1]){
            continue;
        }else{
           output.push(temp);
            temp = intervals[i]
        }
    }
    output.push(temp);
    return output;
};