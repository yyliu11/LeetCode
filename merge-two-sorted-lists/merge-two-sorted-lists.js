/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result = null;

    if(l1 == null) return l2; 
    if(l2 == null) return l1;
    
    result = (l1.val <= l2.val) ? l1 : l2;
    result.next = (l1.val <= l2.val) ?  mergeTwoLists(l1.next, l2) : mergeTwoLists(l1, l2.next);

    return result;
    
};