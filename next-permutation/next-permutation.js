/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  //Helper function to swap nums at array idx.
  const swap = (idx1, idx2) => [nums[idx1], nums[idx2]] = [nums[idx2], nums[idx1]];
  
  //Handles edge cases like [1] and []. Even if constraints say there will
  //always be at least one in array - easy enough to handle both.
  if (nums.length <= 1) return;
  
  //Initialize firstDesc var to be second from last in array. (Can't detect
  //descending if there isn't one 'before' it).  Then we iterate through from
  //end until we find a descending value.  If no value is found, firstDesc 
  //will be -1.  This indicates there is No next permutation.  Reverse and return.
  let firstDesc = nums.length - 2;
  while (firstDesc >= 0 && nums[firstDesc] >= nums[firstDesc + 1]) firstDesc--;
  if (firstDesc === -1) return nums.reverse();
  
  //Initialize toSwap to be right after firstDesc.  We then iterate through to 
  //find lowest value that is still > nums[firstDesc].
  let toSwap = firstDesc + 1;
  while (nums[toSwap + 1] > nums[firstDesc]) toSwap++;
  
  //Swap nums[firstDesc] with nums[toSwap].
  swap(firstDesc, toSwap)
  
  //Iterate through remainder of array after firstDesc and reverse.
  for (let leftIdx = firstDesc + 1, rightIdx = nums.length - 1; leftIdx < rightIdx; leftIdx++, rightIdx--) {
     swap(leftIdx, rightIdx);
  }
};