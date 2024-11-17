// Method 1: Using array methods (split, reverse, join)
function reverseString1(str) {
    return str.split('').reverse().join('');
}

// Method 2: Using a for loop
function reverseString2(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Method 3: Using reduce
function reverseString3(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

// Method 4: Using spread operator and array methods
function reverseString4(str) {
    return [...str].reverse().join('');
}

// Method 5: Using recursion
function reverseString5(str) {
    if (str === '') return '';
    return reverseString5(str.substr(1)) + str.charAt(0);
}

// Examples
const testString = "Hello, World!";
console.log(reverseString1(testString)); // "!dlroW ,olleH"
console.log(reverseString2(testString)); // "!dlroW ,olleH"
console.log(reverseString3(testString)); // "!dlroW ,olleH"
console.log(reverseString4(testString)); // "!dlroW ,olleH"
console.log(reverseString5(testString)); // "!dlroW ,olleH"
