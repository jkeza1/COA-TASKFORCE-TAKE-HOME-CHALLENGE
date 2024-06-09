# COA-TASKFORCE-TAKE-HOME-CHALLENGE
# Photo Gallery Application README

## Overview

This README provides information about the Photo Gallery application. This application allows users to browse through a collection of photos in an interactive and visually appealing way.

## Features

- **Thumbnail Images:** Display a grid of thumbnail images for users to browse.
- **Dynamic Overlays:** Overlay information or effects on images for interactivity.
- **Responsive Design:** Ensure compatibility and optimal viewing across different devices.

## Setup Instructions

1. **Clone the Repository:**
```bash
git clone https://github.com/jkeza1/COA-TASKFORCE-TAKE-HOME-CHALLENGE.git
```
3. **Navigate to the Project Directory:**
```bash
cd photo gallery
```
4. **Open the HTML File:**
- Open `index.html` in your preferred web browser to view the photo gallery.


- **Interactivity:**
- Explore any interactive overlays or effects added to the photos.

## Customization

- **Adding Photos:**
- Add your photos to the `images` directory.
- Update the HTML dynamically to include new thumbnail images.

- **Styling:**
- Customize the appearance of the gallery by modifying the CSS file (`styles/style.css`).

  ## challenge1-Array Manipulation

## Overview

Welcome to the Subarray with Target Sum README! This document provides an in-depth explanation of the `hasSubarrayWithTargetSum` function, a powerful tool to determine whether a contiguous subarray within an array sums up to a specified target value.

## Function Description

The `hasSubarrayWithTargetSum` function takes two parameters:
- `arr`: An array of integers.
- `target`: The target sum value.

It returns `true` if there exists a subarray whose elements sum up to the target value. Otherwise, it returns `false`.

## Algorithm: Sliding Window Technique

The function employs the efficient sliding window technique to search for the subarray. Here's how it works:
1. Initialize two pointers: `start` and `end`.
2. Iterate through the array with the `end` pointer, adding elements to the current sum.
3. While the current sum exceeds the target value, shrink the window from the left by incrementing the `start` pointer and subtracting the element at the `start` index from the current sum.
4. Check if the current sum equals the target value. If so, return `true`.
5. If the loop completes without finding a matching subarray, return `false`.

## Example Usage

```javascript
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
## Example Usage

To illustrate the usage of the `hasSubarrayWithTargetSum` function, consider the following example:

```javascript
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); // Output: true
```
Setup Instructions
Ready to utilize this powerful function in your projects? Follow these simple steps:

Copy Function:
Copy the hasSubarrayWithTargetSum function code provided in the README or directly from your preferred source.

Paste into Your Project:
Paste the copied function into your JavaScript project file or script.

Call the Function:
Use the function in your code by passing an array of integers and the target sum value as parameters.

Run Your Code:
Execute your JavaScript code to verify the functionality of the hasSubarrayWithTargetSum function.

## challenge2-String Transformation
# String Transformation README

## Overview

Welcome to the String Transformation README! This document provides an overview of the `transformString` function, a versatile tool for transforming strings based on specific rules.

## Function Description

The `transformString` function takes a string (`input`) as its parameter and applies transformation rules based on the length of the input string. Here are the rules:

1. If the length of the string is divisible by 3, reverse the entire string.
2. If the length of the string is divisible by 5, replace each character with its ASCII code.
3. If the length of the string is divisible by both 3 and 5, perform both operations in the order specified above.

## Algorithm

The function determines whether to reverse the string, replace characters with ASCII codes, or perform both operations based on the length of the input string. Here's a brief overview of the algorithm:

1. Calculate the length of the input string.
2. Determine if the length is divisible by 3 and/or 5.
3. Apply the transformation rules accordingly:
   - If divisible by 3, reverse the string.
   - If divisible by 5, replace characters with ASCII codes.
   - If divisible by both 3 and 5, reverse the string first, then replace characters with ASCII codes.

## Example Usage

```javascript
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"






