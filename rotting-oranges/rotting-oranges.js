/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    let count = 0;
    let time = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] === 2){
                queue.push([i,j]);
            }
            if(grid[i][j] === 1){ count++; }
        }
    }
  
    if(!count){ return 0; }
     time++;
    
      let temp = [];
    while(queue.length){
        let rotten = queue[0];
       
       
        let up = rotten[0] - 1;
        let down = rotten[0] + 1;
        let left = rotten[1] - 1;
        let right = rotten[1] + 1;
        if(up >= 0 && grid[up][rotten[1]] === 1){
            grid[up][rotten[1]] = 2;
            count--;
            temp.push([up,rotten[1]])
        }
        if(down < grid.length && grid[down][rotten[1]] === 1){
            grid[down][rotten[1]] = 2;
            count--;
            temp.push([down,rotten[1]])
        }
        if(left >= 0 && grid[rotten[0]][left] === 1){
            grid[rotten[0]][left] = 2;
            count--;
            temp.push([rotten[0],left])
        }
        if(right < grid[0].length && grid[rotten[0]][right] === 1){
            grid[rotten[0]][right] = 2;
            count--;
            temp.push([rotten[0],right]);
        }
  
        if(!count){ return time; }
        queue.shift();
        if(!queue.length){
            queue = temp;
            temp = [];
            time++
        } 
    } 
    return -1;
};
