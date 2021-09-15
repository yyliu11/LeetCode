/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head){ return null; }
    if(!n){ return head; }
    var arr = [];
    var node = head;
    while(node){
        arr.push(node.val);
        node = node.next;
    }
    if(arr.length < n){ return head; }
    arr.splice(arr.length - n, 1);
    if(!arr.length){ return null; }
    var newHead = new ListNode();
    var newNode = newHead;
    for(var i = 0; i<arr.length; i++){
        newNode.val = arr[i];
        if(i+1 < arr.length){
            newNode.next = new ListNode();
            newNode = newNode.next;
        }
    }
    return newHead;
};
