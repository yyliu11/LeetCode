/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const height = grid.length;
    if(!height){ return 0; }
    const width = grid[0].length;
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if(grid[i][j] === '1'){
                count ++;
                markIt(i, j, grid)
            }
        }
    }
    return count;
};

var markIt = function(h,w,g){
    const height = g.length;
    const width = g[0].length;
    if(h < 0 || h === height){ return; }
    if(w < 0 || w === width){ return; }
    if(g[h][w] !== '1'){ return; }
    g[h][w] = '*';
    markIt(h + 1, w, g);
    markIt(h - 1, w, g);
    markIt(h, w + 1, g);
    markIt(h, w - 1, g);
};