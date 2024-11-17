// Method 1: Using Set
function removeDuplicates1(arr) {
    return [...new Set(arr)];
}

// Method 2: Using filter and indexOf
function removeDuplicates2(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Method 3: Using reduce
function removeDuplicates3(arr) {
    return arr.reduce((unique, item) => 
        unique.includes(item) ? unique : [...unique, item], 
    []);
}

// Method 4: Using forEach with object
function removeDuplicates4(arr) {
    const unique = {};
    arr.forEach(item => unique[item] = item);
    return Object.values(unique);
}

// Method 5: Using for...of loop
function removeDuplicates5(arr) {
    const unique = [];
    for (const item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}

// Test cases
const numbers = [1, 2, 2, 3, 4, 4, 5];
const strings = ['apple', 'banana', 'apple', 'cherry', 'banana'];
const mixed = [1, 'a', 1, 'b', 'a', 2, 'b'];

// Testing all methods
console.log(removeDuplicates1(numbers));  // [1, 2, 3, 4, 5]
console.log(removeDuplicates2(strings));  // ['apple', 'banana', 'cherry']
console.log(removeDuplicates3(mixed));    // [1, 'a', 'b', 2]

// For objects
const objects = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' }
];

// Method 6: Remove duplicates based on object property
function removeDuplicateObjects(arr, key) {
    return Array.from(
        new Map(arr.map(item => [item[key], item])).values()
    );
}

console.log(removeDuplicateObjects(objects, 'id'));
