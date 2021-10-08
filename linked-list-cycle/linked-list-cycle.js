/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head){ return false; }
    let map = new Map();
    let node = head;
    
    while(node){
        if(map.has(node)){
            return true;
        }else{
            map.set(node)
        }
        node = node.next;
        if(!node){ return false; }
    }
};