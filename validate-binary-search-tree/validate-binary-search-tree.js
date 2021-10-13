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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = new TreeNode(-Infinity);
    let result = true;
    
    const checkNodes = (node)=>{
        if(!node){ return; }
        checkNodes(node.left)
        if(!result){ return }
        if(prev.val >= node.val){ result = false;return }
        prev = node;
        checkNodes(node.right)
    };
    checkNodes(root);
    return result
};