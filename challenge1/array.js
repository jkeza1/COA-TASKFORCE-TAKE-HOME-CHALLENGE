function hasSubarrayWithTargetSum(arr, target) {
    let start = 0;  // Initialize the start pointer
    let current_sum = 0;  // Initialize the sum of the current window

    // Iterate through the array with the end pointer
    for (let end = 0; end < arr.length; end++) {
        current_sum += arr[end];  // Add the current element to the current sum

        // While the current sum is greater than the target, shrink the window from the left
        while (current_sum > target && start <= end) {
            current_sum -= arr[start];  // Subtract the element at the start pointer from the current sum
            start++;  // Move the start pointer to the right
        }

        // Check if the current sum is equal to the target
        if (current_sum === target) {
            return true;  // If yes, return true
        }
    }

    return false;  // If the loop completes without finding a matching subarray, return false
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true

