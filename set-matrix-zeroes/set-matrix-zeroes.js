/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let height = matrix.length;
    let width = matrix[0].length;
    
    const markIt = (h,w)=>{
        for(let i = 0; i < width; i++){
            if(matrix[h][i] === 0){ continue; }
            matrix[h][i] = '*'
        }
        for(let k = 0; k < height; k++){
            if(matrix[k][w] === 0){ continue; }
            matrix[k][w] = '*'
        }
    };
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            if(matrix[h][w] === 0){
                matrix[h][w]='*';
                 markIt(h,w) 
            }
        }
    }
    for(let m = 0; m < height; m++){
        for(let n = 0; n < width; n++){
            if(matrix[m][n] === '*'){
                matrix[m][n]=0
            }
        }
    }
    return matrix;
};
setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])