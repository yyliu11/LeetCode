/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let obj = {};
    let result = [];
     
    for(let i = 0; i < points.length; i++){
        obj[i+' index'] = points[i][0]**2 + points[i][1]**2;
    }

    let distance = Object.keys(obj).sort((a,b)=>{
        return obj[b] - obj[a]
    });
   
    while(k >= 1){
        let index = distance.length - k;
        result.push(points[Number(distance[index].split(' ')[0])]);
        k--
    }
    return result;
};
