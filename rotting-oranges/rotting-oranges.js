/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let fresh = 0;
    let minutes = 0;
    
    const queue = [];
    
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            if (grid[i][j] === 2) {
                queue.push([0,i,j]);
            }
            if (grid[i][j] === 1) {
                ++fresh;
            }
        }
    }
    
    const mark = (i,j) => {
        grid[i][j] = 2;
    }
    
    while (queue.length) {
        const [level,i,j] = queue.pop();
        
        if (grid[i-1] && grid[i-1][j] === 1) {
            mark(i-1, j);
            queue.unshift([level+1,i-1, j]);
            --fresh;
        }
        if (grid[i+1] && grid[i+1][j] === 1) {
            mark(i+1, j);
            queue.unshift([level+1,i+1, j]);
            --fresh;
        }
        if (grid[i][j-1] === 1) {
            mark(i, j-1);
            queue.unshift([level+1,i, j-1]);
            --fresh;
        }
        if (grid[i][j+1] === 1) {
            mark(i, j+1);
            queue.unshift([level+1,i, j+1]);
            --fresh;
        }
        if (queue.length && queue[queue.length-1][0] > level) ++minutes;
    }
    
    return fresh > 0 ? -1 : minutes;
};