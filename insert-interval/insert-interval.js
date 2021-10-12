/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(!intervals.length){ return [newInterval]}
    let size = intervals.length;
    let i;
    let temp = [];
    for(i = 0; i < size; i++){
        debugger
        let current = intervals[i];
        if(current[1] >= newInterval[0] && current[1] < newInterval[1]&&current[0] < newInterval[0]){
            newInterval[0] = current[0];  
        }
        if(current[0] > newInterval[0] && current[0] <= newInterval[1]&&current[1] > newInterval[1]){
           newInterval[1] = current[1];
        }
        if(current[0] <= newInterval[0] && current[1] >= newInterval[1]){
            newInterval = current
        }
        if(current[0] > newInterval[1]){
            temp.push(newInterval);
            break
        }
        if(current[1] < newInterval[0]){
             temp.push(current)
        } 
        if(i === size - 1){
           temp.push(newInterval) 
        }
    }
    intervals = temp.concat(intervals.slice(i));
    return intervals
};

insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8])