/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let array = [];
    
    const getValue = (node)=>{
        if(!node){ return; }
        array.push(node.val);
        return getValue(node.next)
    }; 
    for(let list of lists){
       getValue(list) 
    }
    array.sort((a,b)=> a-b);
   
    let head = null;
    let node;
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            head = new ListNode(array[0]);
            node = head;
        }else{
              node.next = new ListNode(array[i]);
              node = node.next;
        }  
    }
    return head;
};
// var mergeKLists = function(lists) {
//    let arrayOutput = [];
//     const pushLinkedListValue = (node) => {
//         if(!node){return}
//         arrayOutput.push(node.val);
//         return pushLinkedListValue(node.next);
//     }
//     for(let i=0; i<lists.length; i++){
//         pushLinkedListValue(lists[i]);
//     }
//     arrayOutput.sort(function(a, b) {
//       return a - b;
//     });
//     let head = null;
//     let newlinked;
//     for(let i=0; i<arrayOutput.length;i++){
//         if(i==0){
//             head = new ListNode(arrayOutput[i],null);
//             newlinked = head;
//         }
//         else{
//             newlinked.next = new ListNode(arrayOutput[i],null);
//             newlinked = newlinked.next;
//         }
//     }
//     return head;
    
// }