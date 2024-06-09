function transformString(input) {
    // Check if the length of the string is divisible by 3
    const isDivisibleBy3 = input.length % 3 === 0;
    // Check if the length of the string is divisible by 5
    const isDivisibleBy5 = input.length % 5 === 0;

    // If the length is divisible by both 3 and 5, perform both operations
    if (isDivisibleBy3 && isDivisibleBy5) {
        // Reverse the entire string
        input = input.split('').reverse().join('');
        // Replace each character with its ASCII code
        input = input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (isDivisibleBy3) {
        // If divisible by 3, reverse the string
        input = input.split('').reverse().join('');
    } else if (isDivisibleBy5) {
        // If divisible by 5, replace each character with its ASCII code
        input = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return input;
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
