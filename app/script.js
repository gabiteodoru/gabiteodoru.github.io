import d3 from 'd3';

const width = 960;
const height = 640;

const svg = d3.select('svg');

const circles = svg.selectAll('circle')
	.data(randomNumbers(600, width));

const circleEnter = circles.enter().append('circle');

circleEnter.attr('cy', () => Math.random() * (height - 60) + 30);
circleEnter.attr('cx', (d) => biasLeft(d));
circleEnter.attr('r', (d) => Math.sqrt(biasLeft(d)));
circleEnter.attr('opacity', () => (Math.random() + 0.5) / 6);

/**
 * Returns an array of numbers.
 *
 * @param {number} n The length of the array
 * @param {number} max The maximum number.
 * @returns {Array} Array of numbers.
 */
function randomNumbers(n=1, max=100) {
	return n === 0 ? [] : [...randomNumbers(n - 1, max), Math.random() * max];
}

/**
 * Biases a number on a spectrum towards 0 sine-ly.
 *
 * @param {number} x The number.
 * @param {number} max The maximum number in the spectrum.
 * @returns {number} The new number.
 */
function biasLeft(x, max=width) {
	return (2 * max * Math.asin(x / max)) / Math.PI;
}

/**
 * Same as biasLeft but biases the number towards the max.
 *
 * @param {number} x The number.
 * @param {number} max The maximum number in the spectrum.
 * @returns {number} The new number.
 */
function biasRight(x, max=width) {
	return Math.sin((x / max * Math.PI) / 2) * max;
}