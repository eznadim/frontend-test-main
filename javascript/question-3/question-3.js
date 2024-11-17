// Method 1: Basic random integer generator (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Method 2: With input validation
function getRandomIntSafe(min, max) {
    // Validate input
    if (typeof min !== 'number' || typeof max !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    
    // Ensure min is less than max
    if (min > max) {
        [min, max] = [max, min]; // Swap values
    }
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Method 3: Generate array of random numbers
function getRandomArray(min, max, count) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(getRandomInt(min, max));
    }
    return result;
}

// Method 4: Generate unique random numbers
function getUniqueRandomInts(min, max, count) {
    // Validate that range is large enough
    if ((max - min + 1) < count) {
        throw new Error('Range is too small to generate unique numbers');
    }
    
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(getRandomInt(min, max));
    }
    return Array.from(numbers);
}

// Examples
console.log('Single random number:', getRandomInt(1, 10));
console.log('Safe random number:', getRandomIntSafe(10, 1)); // Works with reversed min/max
console.log('Array of random numbers:', getRandomArray(1, 10, 5));
console.log('Unique random numbers:', getUniqueRandomInts(1, 10, 5));

// Error handling example
try {
    console.log(getRandomIntSafe('1', 10)); // Throws error
} catch (error) {
    console.error('Error:', error.message);
}

// Test different ranges
console.log('0-10:', getRandomInt(0, 10));
console.log('Negative range:', getRandomInt(-5, 5));
console.log('Single number:', getRandomInt(5, 5)); // Always returns 5

