/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
    let grid = new Array(m).fill(undefined).map(()=>new Array(n));
    grid[m - 1].fill(1);
    let h = m;
    while(h > 0){
        grid[h - 1][n - 1] = 1;
        h--;
    }
    for(let i = m -2; i >= 0; i--){
        for(let k = n - 2; k>=0; k--){
            grid[i][k] = grid[i+1][k] + grid[i][k+1]
        }
    }
    return grid[0][0];
};
uniquePaths(3,7)


