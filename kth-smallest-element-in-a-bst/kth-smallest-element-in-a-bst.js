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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let res;
    
    const findNode = (node)=>{
        if(!node){ return; }
        findNode(node.left);
        count++;
        if(count === k){ res = node.val; return; }
        findNode(node.right)
    };
    findNode(root);
    return res;
};