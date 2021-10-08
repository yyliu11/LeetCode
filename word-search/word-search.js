/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let index = 0;
    let result = false;
    const helper = (i,j,index)=>{
  
       
        let height = board.length;
        let width = board[0].length;
        if(i < 0 || j < 0 || i >= height || j >= width){ return; }
        let letter = word[index];
        if(board[i][j] === letter){
            board[i][j] = '+';
            if(index + 1 === word.length){ result = true; return; }
            helper(i+1, j, index + 1);
            helper(i-1, j, index + 1);
            helper(i, j+1, index + 1);
            helper(i, j-1, index + 1);
            board[i][j] = letter
        }else{ return; }
    };
    let h = board.length;
    let w = board[0].length;
    for(let i = 0; i < h; i++){
        for(let j = 0; j<w; j++){
             helper(i,j,index);
             if(result){ return result; }
        }
    }   
    return result;
};
exist([["C","A","A"],["A","A","A"],["B","C","D"]],"AAB")