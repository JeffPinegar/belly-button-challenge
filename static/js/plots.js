/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

// Jeff Pinegar


// Call updatePlotly() when a change takes place to the DOM
d3.selectAll('#selDataset').on('change', updatePlotly);

const id = '940';
const ethnicity = 'Caucasian';
const gender = 'F';
const age = 24;
const loc = 'Beaufort/NC';
const bbtype = 'I';
const wfreq = 2;

// These d3.selects are use to populate the Demographic information for the selected test subject
// d3.select('.panel-body').text(dDownText);
d3.select('.panel_id').text(`id: ${id}`);
d3.select('.panel_ethnicity').text(`ethnicity: ${ethnicity}`);
d3.select('.panel_gender').text(`gender: ${gender}`);
d3.select('.panel_age').text(`age: ${age}`);
d3.select('.panel_loc').text(`loccation: ${loc}`);
d3.select('.panel_bbtype').text(`bbtype: ${bbtype}`);
d3.select('.panel_wfreq').text(`wfreq: ${wfreq}`);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
// // Use D3 to select the dropdown menu
// const dropdownMenu = d3.select('#selDataset');
// // Assign the value of the dropdown menu option to a variable
// const dataset = dropdownMenu.property('value');
// // const dataset = dropdownMenu.attr('value');   // attr doesn't work here


// --------------------------------  Bar chart   -------------------------------------
function updatePlotly() {
  const barData = [
    {
      y: ['giraffes', 'orangutans', 'monkeys'],
      x: [20, 14, 23],
      type: 'bar',
      orientation: 'h',
    },
  ];

  Plotly.newPlot('bar', barData);
}

// Initialize the bar - chart, i.e. display the bar chart with the first row of data.
updatePlotly();

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

