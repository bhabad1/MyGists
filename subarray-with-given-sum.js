/**
 * Given an unsorted array A of size N that contains only positive integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.
 */


function  subarraySum(arr, n, s)
{
    //your code here

    //Approch 1 : nested for loop
    // let sum = 0, arrIndex=[];
    // for (let i=0; i<n;i++){
    //     sum+=arr[i];
    //     arrIndex.push(i+1);
    //     if(sum==s){
    //         return [arrIndex[0], arrIndex[arrIndex.length-1]]
    //     }
    //     for(let j=i+1;j<n;j++){
    //         sum += arr[j];
           
    //         // console.log(sum, i, j)
    //         if(sum==s){
    //             arrIndex.push(j+1);
    //             return [arrIndex[0], arrIndex[arrIndex.length-1]]
    //         }else if(sum>s){
    //             arrIndex=[]; sum=0;
    //             break;
    //         }
            
    //     }
    //     if(i==n-1) return [-1]
       
    // }


    //Approach 2 : Sliding Window
    //Logic 
    /**
     * Create two variables, start=0, currentSum = arr[0]
     * Traverse the array from index 1 to end.
     * Update the variable currentSum by adding current element, currentSum = currentSum + arr[i]
     * If the currentSum is greater than the given sum, update the variable currentSum as currentSum = currentSum – arr[start],
       and update start as, start++.
     * If the currentSum is equal to given sum, print the subarray and break the loop.
     */
    let currentSum =arr[0], start=0;
    for(let i=1; i<=n;i++){
        while(currentSum>s && start<i-1){
            currentSum = currentSum-arr[start];
            start++;
        }
        if(currentSum==s){
            return [start, i-1];
        }
        if(i<n){
            currentSum+=arr[i];
        }
    }
    return [-1];
    
}

let ans = subarraySum([17,2,3,7,5],5,17);

console.log(ans)