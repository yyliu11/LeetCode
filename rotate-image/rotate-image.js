/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let height = matrix.length;
    const copy = matrix.map(arr => {return arr.slice()});
    for(let i = 0; i < height; i++){
        for(let k = 0; k < height; k++){
            matrix[k][height - 1 - i] = copy[i][k]
        }
    }
    return matrix;
};
