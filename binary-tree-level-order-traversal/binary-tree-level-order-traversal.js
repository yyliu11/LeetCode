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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let output = [];
    if(!root){ return output; }
    let curArr = [root];
    while(curArr.length){
        let temp = [];
        let length = curArr.length;
        for(let i = 0; i < length; i++){
            let first = curArr[0];
            if(first.left){
                curArr.push(first.left)
            }
            if(first.right){
                curArr.push(first.right)
            }
            temp.push(curArr.shift().val)
        }
        output.push(temp)
    }
    return output
};