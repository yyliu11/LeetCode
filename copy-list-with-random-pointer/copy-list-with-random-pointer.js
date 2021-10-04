/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head, map = new Map) {
    if(!head){ return head; }
    if(map.has(head)){ return map.get(head); }
    
    let newNode = new Node(head.val);
    map.set(head, newNode);
    newNode.next = copyRandomList(head.next, map);
    newNode.random = copyRandomList(head.random, map)
;
    return newNode;
};