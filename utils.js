/**
 * Soma dois números.
 * @param {number} num1 - O primeiro número.
 * @param {number} num2 - O segundo número.
 * @returns {number} A soma de num1 e num2.
 * @throws {Error} Se algum dos argumentos não for um número.
 */
function sum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return num1 + num2;
}
// Function to sum two numbers
