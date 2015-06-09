import d3 from 'd3';
import { randomNumbers, biasLeft } from './utils';

const WIDTH = 960;
const HEIGHT = 640;

const svg = d3.select('svg');

const circles = svg.selectAll('circle')
	.data(randomNumbers(600, WIDTH));

const circleEnter = circles.enter().append('circle');

circleEnter.attr('cy', () => Math.random() * (HEIGHT - 60) + 30);
circleEnter.attr('cx', (d) => biasLeft(d, WIDTH));
circleEnter.attr('r', (d) => Math.sqrt(biasLeft(d, WIDTH)));
circleEnter.attr('opacity', () => (Math.random() + 0.5) / 6);
