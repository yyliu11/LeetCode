/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const findMid =(h)=>{
    let fast = h;
    let slow = h;
    while(fast&&fast.next){
        fast=fast.next.next;
        slow=slow.next
    }
    return slow;
};

const reverse = (list)=>{
    let newNode = null;
    while(list){
        let next = list.next;
        list.next = newNode;
        newNode = list;
        list = next
    }
    return newNode;
};

var reorderList = function(head) {
    if(!head){ return null; }
    let l1 = head;
    let mid = findMid(head);
    let l2 = mid.next;
    mid.next = null;
    l2 = reverse(l2);
    
    while(l1&&l2){
      
        let temp = l1.next;
        l1.next = l2;
        l2 = l2.next;
        l1.next.next = temp;
        l1 = l1.next.next;
    }
};

