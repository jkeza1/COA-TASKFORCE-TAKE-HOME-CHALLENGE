function transformString(input) {
    const length = input.length;
    const reverse = length % 3 === 0;
    const ascii = length % 5 === 0;

    if (reverse && ascii) {
        return input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (reverse) {
        return input.split('').reverse().join('');
    } else if (ascii) {
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return input;
}

// Test cases
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
