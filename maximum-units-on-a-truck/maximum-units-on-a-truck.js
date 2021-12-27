/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    if(!boxTypes.length)return 0;
    boxTypes.sort((a,b) => b[1] - a[1]);
    let res = 0;
    console.log(boxTypes)
    for(let i = 0; i < boxTypes.length; i++) {
        if(boxTypes[i][0] >= truckSize) {
            res += boxTypes[i][1] * truckSize;
            return res;
        }
        res += boxTypes[i][1] * boxTypes[i][0];
        truckSize -= boxTypes[i][0];
    }
    return res;
};