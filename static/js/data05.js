/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
let data = null;

// ------------------------------ Bar Chart Start ---------------------------------------------
function barChart(myID) {
  const samples = data.samples;
  const bar_data = samples.filter( (s) => s.id == myID);
  const sampleID = bar_data[0];
  const sampleValues = sampleID.sample_values;
  const otu_ids = sampleID.otu_ids;
  const otu_labels = sampleID.otu_labels;
  const yticks = otu_ids.slice(0, 10).map((otuID) => `OUT ${otuID}`).reverse();

  const barData =[{
    x: sampleValues.slice(0, 10).reverse(),
    y: yticks,
    type: 'bar',
    test: otu_labels.reverse(),
    orientation: 'h',
  }];

  const barLayout = {
    title: 'Top 10 Bacteria Cultures Found',
    margin: {t: 30, l: 150},
  };

  // Insert the bubble chant into the html
  Plotly.newPlot('bar', barData, barLayout);
}
// ------------------------------ Bar Chart End ---------------------------------------------


// ------------------------------ Bubble Chart Start ---------------------------------------------
function bubbleChart(myID) {
  const samples = data.samples;
  const bubble_data = samples.filter( (sObj) => sObj.id == myID);
  const sampleID = bubble_data[0];
  const sampleValues = sampleID.sample_values;
  const otu_ids = sampleID.otu_ids;
  const otu_labels = sampleID.otu_labels;

  const bubbleData = [{
    x: otu_ids,
    y: sampleValues,
    mode: 'markers',
    text: otu_labels,
    marker: {
      size: sampleValues,
      color: otu_ids,
      colorscale: 'Earth',
    },
  }];

  // build bubble Chart
  const bubbleLayout = {
    title: 'Bacteria Culturs per sample',
    margin: {t: 0},
    hovermode: 'closest',
    xaxis: {title: 'OTU ID'},
    margin: {t: 30},
  };
  // Insert the bubble chant into the html
  Plotly.newPlot('bubble', bubbleData, bubbleLayout);
}
// ------------------------------ Bubble Chart End ---------------------------------------------


// guage chart is in seperate file called bounus.js

// -------------------------------  Demographics Panel Start -----------------------------------
function demoInfo(myID) {
  const demo_meta_data = data.metadata;
  const meta_data = demo_meta_data.filter((m) => m.id == myID)[0];
  const demo_info = d3.select('#sample-metadata');
  const id = meta_data.id;
  const ethnicity = meta_data.ethnicity;
  const gender = meta_data.gender;
  const age = meta_data.age;
  const location = meta_data.location;
  const bbtype = meta_data.bbtype;
  const wfreq = meta_data.wfreq;
  demo_info.html('');
  demo_info.append('h6').text(`id: ${id}`);
  demo_info.append('h6').text(`ethnicity: ${ethnicity}`);
  demo_info.append('h6').text(`gender: ${gender}`);
  demo_info.append('h6').text(`age: ${age}`);
  demo_info.append('h6').text(`location: ${location}`);
  demo_info.append('h6').text(`bbtype: ${bbtype}`);
  demo_info.append('h6').text(`wfreq: ${wfreq}`);
};
// -------------------------------  Demographics Panel End -----------------------------------

function optionChanged(myID) {
  barChart(myID);
  bubbleChart(myID);
  demoInfo(myID);
  gaugeChart(myID);
}

// ---------------------------  Update the dashboard Start ------------------------------------
function updateDashboard() {
  const names=data.names;
  const subjdropdownMenu = d3.select('#selDataset');
  // const dataset = subjdropdownMenu.property('value');
  // dataset = names;
  for (let i=0; i < names.length; i++) {
    const myID = names[i];
    subjdropdownMenu.append('option').text(myID).property('value', myID);
  }
  const initID = subjdropdownMenu.property('value');
  barChart(initID);
  bubbleChart(initID);
  demoInfo(initID);
  gaugeChart(initID);
};

const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';


const dataPromise = d3.json(url); // This is a d3 method to read json
console.log('Data Promise: ', dataPromise);


function init() {
  d3.json(url).then(function(tmp_data) {
    data = tmp_data;
    console.log(data);
    updateDashboard();
  });
}

init();
