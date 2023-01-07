/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

// Jeff Pinegar
//

// Initializes the page with a default plot
function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16]}];

  Plotly.newPlot('bar', data); // put the plot where the work "plot is in my HTML"
}

const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// Promise Pending
// this is a promise that the data will be delivered.
// java will not wait for the data it will keep going.
const dataPromise = d3.json(url); // This is a d3 method to read json
console.log('Data Promise: ', dataPromise);


// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});


console.log('step 3');
console.log('step 4');

// console.log('my dataset');
// console.log('some data ', data );


// --------------------------------  Bar chart   -------------------------------------
const barData = [
  {
    y: ['giraffes', 'orangutans', 'monkeys'],
    x: [20, 14, 23],
    type: 'bar',
    orientation: 'h',
  },
];

Plotly.newPlot('bar', barData);


// -----------------------------  Bubble Chart   ---------------------------------------
const trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 11, 12, 13],
  mode: 'markers',
  marker: {
    size: [40, 60, 80, 100],
  },
};

const bubbleData = [trace1];


const bubbleLayout = {
  title: '', // No title
  showlegend: false,
};

Plotly.newPlot('bubble', bubbleData, bubbleLayout); // where='bubble', what = 'data', how = 'layout'


// -----------------------------------  Gauge Chart --------------------------------------
// Reference design:  https://www.instructables.com/Showing-Charts-and-Gauges-of-IOT-Device-Data-Using/

// Enter a speed between 0 and 180
const level = 150; // This is the angle [degreees] in of the needle masured from the 9 o'clock position

// Trig to calc gauge pointer
// The pointer is a slice of a circle with an orign on the scale pointing to the center of the guage
const degrees = 180 - level; // this is the angle of the needle for the machine
const radians = degrees * Math.PI / 180;
// this is the length of the needle
const radius = .6;
// this is the end point of the gauge needle (center of the needle circle)
const x = radius * Math.cos(radians);
const y = radius * Math.sin(radians);

// This controls the shape of the needle
// Path: may have to change to create a better triangle
const mainPath = 'M -.0 -0.025 L .0 0.025 L ';
const pathX = String(x);
const space = ' ';
const pathY = String(y);
const pathEnd = ' Z';
const path = mainPath.concat(pathX, space, pathY, pathEnd);

// Construct Gauge
const dataGauge =
[
  {type: 'scatter',
    x: [0], y: [0],
    marker: {size: 28, color: '850000'},
    showlegend: false,
    name: 'speed', // this is the hover text on the needle center
    text: level,
    hoverinfo: 'text+name'},

  // start of scale
  {
    values: [50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50/9,
      50],

    /*
Construction of the scale for the gauge
*/
    textinfo: 'text',
    rotation: 90,
    textposition: 'inside', // set the postion of the scale text

    // These are the words for the scale
    text: ['8-9',
      '7-8',
      '6-7',
      '5-6',
      '4-5',
      '3-4',
      '2-3',
      '1-2',
      '0-1',
      ''],

    marker: {colors: ['rgba(100, 140, 69, 1)',
      'rgba(132, 161, 101, 1)',
      'rgba(162, 180, 131, 1)',
      'rgba(185, 195, 155, 1)',
      'rgba(208, 210, 178, 1)',
      'rgba(226, 221, 196, 1)',
      'rgba(239, 230, 209, 1)',
      'rgba(249, 236, 219, 1)',
      'rgba(255, 239, 224, 1)',
      'rgba(255, 255, 255, 1)']},

    // label locations
    labels: ['161-180',
      '141-160',
      '121-140',
      '101-120',
      '81-100',
      '61-80',
      '41-60',
      '21-40',
      '0-20',
      ''],

    hoverinfo: 'label',
    hole: .5, // set the radius of the inner white part of the gauge
    type: 'pie',
    showlegend: false,
  }, // End of scale
];

const layout = {
  shapes: [{
    type: 'path',
    path: path,
    fillcolor: '850000',
    line: {color: '850000'},
  }],

  title: '<b>Belly Button Washing Freqency</b> <br><sup>Scrubs per Week</sup>',

  font: {
    family: 'Arial',
    size: 16},
  xaxis: {zeroline: false,
    showticklabels: false, // turn off the xaxis scale for the scatter chart
    showgrid: false,
    range: [-1, 1]}, // range of the scale -1 to 1 for the circle of radius 1
  yaxis: {zeroline: false,
    showticklabels: false, // turn off the xaxis scale for the scatter chart
    showgrid: false,
    range: [-1, 1]}, // range of the scale -1 to 1 for the circle of radius 1
  // height: 1000,
  // width: 1000,
};

Plotly.newPlot('gauge', dataGauge, layout);
