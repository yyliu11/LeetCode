/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
 
    let idx1 = 0;
    let idx2 = 0;
    let temp = [];
     while(idx1 < m && idx2 < n) {
         if(nums1[idx1] > nums2[idx2]) {
             temp.push(nums2[idx2]);
             idx2++
         }else{
             temp.push(nums1[idx1]);
             idx1++ 
         }
     }
  
    if(idx1 < m){ temp.push(...nums1.slice(idx1, m)) }
    if(idx2 < n){ temp.push(...nums2.slice(idx2)) }
    temp.forEach((num, i) => nums1[i] = num)
};