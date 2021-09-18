/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let newArr = new Array();
    debugger
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length -1 ;
    let size = matrix.length * matrix[0].length;
    while(newArr.length < size ){
        
        //from left to right
        for(let i = left; i <= right; i++){
            if(newArr.length < size)
                newArr.push(matrix[top][i]);
        }
        top++;
        
        //from top to bottom
        for(let i = top; i <= bottom; i++){
            if(newArr.length < size)
                newArr.push(matrix[i][right]);
        }
        right--;

        
        //from right to left
        for(let i = right; i >= left; i--){
            if(newArr.length < size)
                newArr.push(matrix[bottom][i]);
        }
        bottom--;
        
        //from bottom to top
        for(let i = bottom; i >= top; i--){
            if(newArr.length < size)
                newArr.push(matrix[i][left]);
        }
        left++;
    }
    return newArr;
};
