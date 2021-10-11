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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let node = root;
    let first = null;
    let second = null;
    let prev = new TreeNode(-Infinity);
    
    const inOrder = (node)=>{
       if(!node){ return; }
       inOrder(node.left)
        if(first === null && prev.val > node.val){
            first = prev
        }
        if(first !== null && prev.val > node.val){
            second = node
        }
        prev = node;
        inOrder(node.right)
    };
    
    inOrder(node);
    
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
    return root;
};