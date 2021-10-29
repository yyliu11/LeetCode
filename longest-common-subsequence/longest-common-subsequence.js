/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let grid = Array.from({length:text1.length + 1}, () => new Array(text2.length + 1).fill(''));
    
    for(let i = 1; i < grid.length; i++){
        for(let j = 1; j < grid[0].length; j++){
            if(text1[i-1] === text2[j-1]){
                grid[i][j] = grid[i-1][j-1] + text1[i-1]
            }else{
                grid[i][j] = grid[i-1][j].length > grid[i][j-1].length ? grid[i-1][j] : grid[i][j-1];
            }
        }
    }
    return grid[grid.length - 1][grid[0].length - 1].length;
};