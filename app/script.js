import d3 from 'd3';

const svg = d3.select('svg');

const circles = svg.selectAll('circle')
	.data([32, 57, 112, 293]);

const circleEnter = circles.enter().append('circle');

circleEnter.attr('cy', () => Math.random() * 100 + 100);
circleEnter.attr('cx', (d, i) => i * 100 + 30);
circleEnter.attr('r', (d) => Math.sqrt(d));
