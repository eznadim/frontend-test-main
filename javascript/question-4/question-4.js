// Method 1: Using replace with regular expression
function removeSpaces1(str) {
    return str.replace(/\s/g, '');
}

// Method 2: Using split and join
function removeSpaces2(str) {
    return str.split(' ').join('');
}

// Method 3: Using replaceAll (modern browsers)
function removeSpaces3(str) {
    return str.replaceAll(' ', '');
}

// Method 4: Using array methods
function removeSpaces4(str) {
    return [...str].filter(char => char !== ' ').join('');
}

// Method 5: Using for loop (traditional approach)
function removeSpaces5(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    return result;
}

// Test cases
const testStrings = [
    "Hello World",
    "   Spaces   at   edges   ",
    "NoSpacesHere",
    "Multiple   Spaces   Between   Words",
    "",  // Empty string
    " ",  // Single space
    "Special Characters !@#$ with spaces"
];

// Test all methods
console.log("Testing all methods:");
testStrings.forEach(str => {
    console.log(`\nOriginal string: "${str}"`);
    console.log(`Method 1: "${removeSpaces1(str)}"`);
    console.log(`Method 2: "${removeSpaces2(str)}"`);
    console.log(`Method 3: "${removeSpaces3(str)}"`);
    console.log(`Method 4: "${removeSpaces4(str)}"`);
    console.log(`Method 5: "${removeSpaces5(str)}"`);
});

// Performance test
const longString = " ".repeat(1000000) + "Hello World" + " ".repeat(1000000);
console.log("\nPerformance test with long string:");

console.time('Method 1 (regex)');
removeSpaces1(longString);
console.timeEnd('Method 1 (regex)');

console.time('Method 2 (split/join)');
removeSpaces2(longString);
console.timeEnd('Method 2 (split/join)');

console.time('Method 3 (replaceAll)');
removeSpaces3(longString);
console.timeEnd('Method 3 (replaceAll)');

console.time('Method 4 (array methods)');
removeSpaces4(longString);
console.timeEnd('Method 4 (array methods)');

console.time('Method 5 (for loop)');
removeSpaces5(longString);
console.timeEnd('Method 5 (for loop)');
