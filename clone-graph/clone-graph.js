/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, map = new Map()) {
    if(!node){ return null; }
    if(map.has(node.val)){ return map.get(node.val)}
    const newNode = new Node(node.val);
    map.set(node.val,newNode);
    for(let neighbor of node.neighbors){
        newNode.neighbors.push(cloneGraph(neighbor, map))
    }
    return newNode;
};