/*
Given an array A of N integers, return the smallest positive integer (greater than 0) that does not occur in A.

Ex) A = [1,3,6,4,1,2] should return 5.

Qs:
1. Can there be duplicates?
- Yes.
2. Can there be negative integers?
- Yes.
*/

var firstMissingPositive = function(nums) {    
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], 1);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!m.has(i)) return i;
    }
    return nums.length + 1; // the array is [1,2,...,n]
    // Time Complexity: O(n)
    // Space Complexity: O(n)
    /*
    The worst case (the first missing positive being the greatest) is
    when the array is [1,2..,n]. Therefore, in all other cases except this case, 
    the first missing positive number is less than or equal to n (nums.length).
    */
}

var firstMissingPositive = function(nums) {
    // First, we need to understand that the first missing positive number is less than or equal to n (length of array) except for one case. The explanation is in the above.
    // We will position every positive integer in the array at its corresponding index
    // ex) 1 at index 0, 2 at index 1, 3 at index 2
    // In this way, the array can position all integers that are less than or equal to n at their corresponding indices without changing the size of given array.
    // Therefore, we can find the first missing positive integer by scanning through the array.
    
    for (let i = 0; i < nums.length; i++) {
        let idx = nums[i]-1;
        if (i == idx || nums[i] == nums[idx]) continue; // already positioned or nums[i] is a duplicate
        if (idx >= 0 && idx <= nums.length - 1) {
            [nums[i], nums[idx]] = [nums[idx], nums[i]];
            i--; // check the swapped number
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (i+1 == nums[i]) continue;
        else return i+1; // the next positive number which is i+1 doesn't exist in the array
    }
    
    return nums.length + 1; // the array is [1,2,...,n]
    // Time Complexity: O(n)
    // Space Complexity: O(1)
}

console.log(firstMissingPositive([1,3,6,4,1,2])) // => 5
console.log(firstMissingPositive([1,-2,3,-2,10,8])) // => 2
console.log(firstMissingPositive([-1,-2,-3])) // => 1