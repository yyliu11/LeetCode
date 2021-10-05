/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let output = 0;
    const findValues = (node)=>{
        if(node.val <= low){
            if(node.val === low){
              output+=node.val;
            }
            if(node.right){
                 findValues(node.right) 
            }
        }
        else if(node.val >= high){
           if(node.val === high){
            output+= node.val;
           }
           if(node.left){
            findValues(node.left) 
           }
        }else{
            output+=node.val
            if(node.right){
                 findValues(node.right) 
            } 
            if(node.left){
            findValues(node.left) 
           }
        }
    };
    findValues(root);
    return output;
};