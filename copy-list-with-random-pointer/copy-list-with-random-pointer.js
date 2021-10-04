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
var copyRandomList = function(head) {
    if(!head){ return null; }
    let map = new Map();
    let curNode = head;
    while(curNode){
        let newNode = new Node(curNode.val);
        map.set(curNode, newNode);
        curNode = curNode.next;
    }
    curNode = head;
    while(curNode){
        if(!curNode.next){ map.get(curNode).next = null; }else{
            map.get(curNode).next = map.get(curNode.next);
        }       
        map.get(curNode).random = map.get(curNode.random);
        curNode = curNode.next;
    }
    return map.get(head);
};