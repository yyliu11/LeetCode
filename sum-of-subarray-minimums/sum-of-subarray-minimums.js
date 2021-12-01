/**
 * @param {number[]} arr
 * @return {number}
 */
// var sumSubarrayMins = function(arr) {
//     let res = 0;
//     const left = new Array(arr.length).fill(0);
//     const right = new Array(arr.length).fill(0);
//     const leftQ = [0];
//     const rightQ = [arr.length - 1];
//     left[0] = 1;
//     right[right.length - 1] = 1;
// //first find how many on the left are smaller than the current(including itself)
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > arr[i-1]){
//             left[i] = 1;
//             leftQ.push(i)
//         }else{
//             while(arr[i] <= arr[leftQ[leftQ.length - 1]]){
//                 left[i] += left[leftQ[leftQ.length - 1]];
//                 leftQ.pop()
//             }
//             left[i] += 1;
//             leftQ.push(i)
//         }
//     }
// //then find how many on the right are smaller than the current(including itself)
//      for(let k = arr.length - 2; k >= 0; k--){
//         if(arr[k] > arr[k+1]){
//             right[k] = 1;
//             rightQ.unshift(k)
//         }else{
//             while(arr[k] <= arr[rightQ[0]]){
//                 right[k] += right[rightQ[0]];
//                 rightQ.shift()
//             }
//             right[k] += 1;
//             rightQ.shift(k)
//         }
//     }
// console.log(left,right)
// //left * right = the number of subarrays which has the current as the smallest number
// //sum of (left * right * current number) is the answer
//     for(let x = 0; x < arr.length; x++){
//         res += arr[x]*left[x]*right[x]
//     }
//     return res
// };

var sumSubarrayMins = function(A) {
    let leftIndex = new Array(A.length)
    let leftStack = [ ]
    
    
    for(let i =A.length-1; i>=0; i--){
        if (i===A.length-1){
            leftIndex[i]= 1
            leftStack.push(i)
        }
        else if( A[i]>A[i+1]){
            leftIndex[i]= 1
            leftStack.push(i)
            
        }
        else{
            let count =1 
            //console.log(leftStack)
            while(A[i]<A[leftStack[leftStack.length-1]]){
                //console.log(leftStack)
                count+=leftIndex[leftStack[leftStack.length-1]]
                leftStack.pop()
            }
            leftIndex[i]=count
            leftStack.push(i)
        }
        
    }
 
    
    let rightIndex = new Array(A.length)
    let rightStack = [ ]
    
    
    for(let i =0; i<A.length; i++){
        if (i===0){
            rightIndex[i]= 1
            rightStack.push(i)
        }
        else if( A[i]>A[i-1]){
            rightIndex[i]= 1
            rightStack.push(i)
            
        }
        else{
            let count =1 
            while(A[i]<=A[rightStack[rightStack.length-1]]){
                //console.log(rightStack)
                count+=rightIndex[rightStack[rightStack.length-1]]
                rightStack.pop()
            }
            rightStack.push(i)
            rightIndex[i]=count
        }
        
    }
    let sum=0
    for(let i =0; i<A.length; i++){
        sum+= rightIndex[i]*leftIndex[i]*A[i]
    }
    return  (sum%1000000007)


}
