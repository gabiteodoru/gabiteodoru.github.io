/**
 * Returns an array of numbers.
 *
 * @param {number} n The length of the array
 * @param {number} max The maximum number.
 * @returns {Array} Array of numbers.
 */
export function randomNumbers(n=1, max=100) {
	return n === 0 ? [] : [...randomNumbers(n - 1, max), Math.random() * max];
}

/**
 * Biases a number on a spectrum towards 0 sine-ly.
 *
 * @param {number} x The number.
 * @param {number} max The maximum number in the spectrum.
 * @returns {number} The new number.
 */
export function biasLeft(x, max) {
	return (2 * max * Math.asin(x / max)) / Math.PI;
}

/**
 * Same as biasLeft but biases the number towards the max.
 *
 * @param {number} x The number.
 * @param {number} max The maximum number in the spectrum.
 * @returns {number} The new number.
 */
export function biasRight(x, max) {
	return Math.sin((x / max * Math.PI) / 2) * max;
}