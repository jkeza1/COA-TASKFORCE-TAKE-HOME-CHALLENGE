// Function to transform the string based on given rules
function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // Perform both operations: reverse and then ASCII code
        str = str.split('').reverse().join(''); // Reverse the string
        str = str.split('').map(char => char.charCodeAt(0)).join(' '); // Replace each character with its ASCII code
    } else if (length % 5 === 0) {
        // Replace each character with its ASCII code
        str = str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // Reverse the entire string
        str = str.split('').reverse().join('');
    }

    return str;
}

// Function to display the output
function displayOutput(inputStr) {
    const outputDiv = document.getElementById('output');
    const result = transformString(inputStr);

    const container = document.createElement('div');
    const heading = document.createElement('h3');
    heading.textContent = `Input: ${inputStr}`;
    const paragraph = document.createElement('p');
    paragraph.textContent = `Output: ${result}`;

    container.appendChild(heading);
    container.appendChild(paragraph);
    outputDiv.appendChild(container);
}

// Example usage
const examples = ["Hamburger", "Pizza", "Chocolate Chip Cookie"];
examples.forEach(example => displayOutput(example));
