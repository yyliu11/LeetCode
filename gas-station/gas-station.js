/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    var total = 0;
    var totalFromStart = 0;
    var start = 0;
    for(var i = 0; i < gas.length; i++){
        var remaining = gas[i] - cost[i];
        totalFromStart += remaining;
        if(totalFromStart < 0){
            totalFromStart = 0;
            start = i + 1;
        }
        total += remaining;
    }
    return total < 0 ? -1 : start;
};
