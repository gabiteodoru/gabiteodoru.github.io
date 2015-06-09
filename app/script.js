import d3 from 'd3';

const width = 960;
const height = 640;

const svg = d3.select('svg');

const circles = svg.selectAll('circle')
	.data(randomNumbers(50, width));

const circleEnter = circles.enter().append('circle');

circleEnter.attr('cy', () => Math.random() * (height - 60) + 30);
circleEnter.attr('cx', (d) => d);
circleEnter.attr('r', (d) => Math.sqrt(d));

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
