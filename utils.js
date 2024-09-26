function sum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 + num2;
}
// Function to sum two numbers
