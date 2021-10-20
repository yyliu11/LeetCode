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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){ return 0; }
    let count = 0;
    let queue = [root];
    
    while(queue.length){
        count++;
        let size = queue.length;
        for(let i = 0; i<size; i++){
            let curNode = queue[0];
            if(curNode.left){
                queue.push(curNode.left)
            }
            if(curNode.right){
                queue.push(curNode.right)
            }
            queue.shift()
        }
    }
    return count;
};