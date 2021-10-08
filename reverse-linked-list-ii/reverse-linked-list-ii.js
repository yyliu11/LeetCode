/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(!head.next || left===right){ return head; }
    let map = new Map();
    let node = head;
    let tail = null;
    let count = 0;
    let start = 0;
    
    while(node){
        count++;
        if(left <= count && count <= right){
            start++;
            map.set(start, node.val)
        }
        if(count > right){
           tail = node;
           break
        }
        node = node.next
    }
    node = head;
    count = 0;
    
    while(node){
        count++;
        if(left === 1 & count === 1){
            node.val = map.get(start);
            start--
        }
        if(count+1 === left){
            node.next = new ListNode(map.get(start));
            start--
        }
        if(left <= count && count < right){
            node.next = new ListNode(map.get(start));
            start--
        }
        if(count === right){
            node.next = tail;
            break
        }
        node = node.next
    }
    return head
};