/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const res = [];
  //pass an index,  a temp array and a current sum into an recursive function
  const backtrack = (toTry = 0, current = [], currentSum = 0) => {
    if (currentSum === target) return res.push([...current]);
      //iterate through the input array
    for (let i = toTry; i < candidates.length; i++) {
        //update the current sum
      const newCur = currentSum + candidates[i];
      if (newCur > target) continue;
        //push current number into the temp array
      current.push(candidates[i])
        //pass in index, temp array and current sum
      backtrack(i, current, newCur);
      current.pop()
    }
  }
  
  backtrack();
  return res;
}
