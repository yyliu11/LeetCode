/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    var directions = [[0,1],[1,0],[0,-1],[-1,0]];
    var start = [0, 0];
    var direction = 0;
    for (let instr of instructions){
        if(instr === 'G'){
            start[0] += directions[direction][0];
            start[1] += directions[direction][1];
        }
        if(instr === 'L'){ direction --; }
        if(instr === 'R'){ direction ++; }
        if(direction < 0){ direction += 4; }
        if(direction > 3){ direction %= 4; }
    }
    if(direction){ return true; }
    if(!start[0] && !start[1]){ return true; }
    return false;
};