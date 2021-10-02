/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const helper = (arr)=>{
        let reversedArr = arr.map(num => {
            return num
        });
        arr.reverse()    
        return arr.join('') === reversedArr.join('');
    };
  
    let array = [];
    while(head){
        array.push(head.val);
        head = head.next
    }
    return helper(array);
};