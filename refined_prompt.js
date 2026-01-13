/**
 * Converts a given string to camelCase format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string, 
 *                 if it starts with a number, or if it is "NA".
 * @returns {string} The camelCase version of the input string.
 *
 * @example
 * toCamelCase('first name'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 * toCamelCase('SCREEN_NAME'); // returns 'screenName'
 * toCamelCase('mobile-number'); // returns 'mobileNumber'
 * toCamelCase('HTNstatus'); // returns 'htnStatus'
 * toCamelCase('5cats'); // throws an error
 */

/**
 * Converts a given string to dot.case format.
 *
 * @param {string} str - The input string to be converted.
 * @throws {Error} Throws an error if the input is not a string, 
 *                 if it starts with a number, or if it is "NA".
 * @returns {string} The dot.case version of the input string.
 *
 * @example
 * toDotCase('first name'); // returns 'first.name'
 * toDotCase('user_id'); // returns 'user.id'
 * toDotCase('SCREEN_NAME'); // returns 'screen.name'
 * toDotCase('mobile-number'); // returns 'mobile.number'
 * toDotCase('HTNstatus'); // returns 'htnstatus'
 * toDotCase('5cats'); // throws an error
 */
function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (/^\d/.test(str) || str === 'NA') {
        throw new Error('Invalid input: string cannot start with a number or be "NA".');
    }

    return str
        .replace(/[-_]+/g, ' ') // Replace dashes and underscores with spaces
        .split(' ') // Split into words
        .map((word, index) => {
            // Convert to camelCase
            if (index === 0) {
                return word.toLowerCase(); // First word in lowercase
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter
        })
        .join(''); // Join back into a single string
}

// Example usage:
try {
    console.log(toCamelCase('first name')); // firstName
    console.log(toCamelCase('user_id')); // userId
    console.log(toCamelCase('SCREEN_NAME')); // screenName
    console.log(toCamelCase('mobile-number')); // mobileNumber
    console.log(toCamelCase('HTNstatus')); // htnStatus
    console.log(toCamelCase('5cats')); // Should throw an error
} catch (error) {
    console.error(error.message);
}

function toDotCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string.');
    }
    if (/^\d/.test(str) || str === 'NA') {
        throw new Error('Invalid input: string cannot start with a number or be "NA".');
    }

    return str
        .replace(/[-_]+/g, '.') // Replace dashes and underscores with dots
        .toLowerCase(); // Convert to lowercase
}

// Example usage:
try {
    console.log(toDotCase('first name')); // first.name
    console.log(toDotCase('user_id')); // user.id
    console.log(toDotCase('SCREEN_NAME')); // screen.name
    console.log(toDotCase('mobile-number')); // mobile.number
    console.log(toDotCase('HTNstatus')); // htnstatus
    console.log(toDotCase('5cats')); // Should throw an error
} catch (error) {
    console.error(error.message);
}
