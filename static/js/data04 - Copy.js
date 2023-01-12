/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
function buildmetadata(sample) {
  d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then((data)=>{
    const metadata = data.metadata;
    //
    const resultArray = metadata.filter((sampleObj) => sampleObj.id ==sample);
    const result = resultArray[0];
    //
    const PANEL = de.select('#sample-metadata');

    //
    PANEL.html('');

    //
    //
    for (key in result) {
      PANEL.append('h6').text(`${key.toUpperCase()}: ${result[key]}`);
    };

    // Bounus buile guage chart
    // build Gauge(results.wfreg);
  });
}

function buildcharts(sample) {
  d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then((data)=>{
    const samples = data.samples;
    const resultArray = samples.filter((sampleOjb) => sampleOjb.id == sample);
    const results = resultArray[0];

    const otu_ids = result.otu_ids;
    const otu_labels = results.otu_labels;
    const sample_values = result.sample_values;

    // build bubble Chart
    const bubbleLayout = {
      title: 'Bacteria Culturs per sample',
      margin: {t: 0},
      hovermode: 'closest',
      xaxis: {title: 'OTU ID'},
      margin: {t: 30},
    };
    const bubbleData = [
      {
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        markers: {
          size: sample_values,
          color: otu_ids,
          colorscale: 'Earth',
        },
      },
    ];

    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    const yticks = otu_ids.slice(0, 10).map((otuID) => `OUT ${otuID}`).reverse();
    const barData = [
      {
        y: yticks,
        x: sample_values.slice(0, 10).reverse(),
        text: otu_lables.slice(0, 10).reverse(),
        type: 'bar',
        orientation: 'h',
      }];

    const barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      margin: {t: 30, l: 150},
    };

    Plotly.newPlot('bar', barData, barLayout);
  });
}


function init() {
  //
  const selector = d3.select('#selectDataset');

  //
  d3.json('https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json').then((data)=> {
    const sampleNames = data.names;

    for (let i = 0; i, sampleNames.length; i++) {
      selector
          .append('options')
          .text(sampleNames[i])
          .property('value', sampleNames[i]);
    };

    //
    const firstSample = SampleNames[0];
    buildcharts(firstSample);
    buildmetadata(firstSample);
  });
}

function optionChanged(newSample) {
  //
  buildcharts(newSample);
  buildmetadata(newSample);
}

// Intialize the dashboard
init();


// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------
// -------------------------


// const dataPromise = d3.json(url); // This is a d3 method to read json
// console.log('Data Promise: ', dataPromise);

// // Fetch the JSON data and console log it
// mydata = d3.json(url).then(function(data) {
//   data=>data}
// //   console.log('step 1');
// //   console.log(data.age[3]);
// //   console.log('step 2');
// // });


// console.log('step 3');
// console.log('step 4');

// // console.log('my dataset');
// // console.log('some data ', data );


// function buildMetadata(sample) {
//   d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
//     let metadata = data.metadata;
//     // Filter the data for the object with the desired sample number
//     let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     let result = resultArray[0];
//     // Use d3 to select the panel with id of `#sample-metadata`
//     let PANEL = d3.select("#sample-metadata");
//     // Use `.html("") to clear any existing metadata
//     PANEL.html("");
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
//     for (key in result){
//       PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
//     };
//     // BONUS: Build the Gauge Chart
//     buildGauge(result.wfreq);
//   });
// }
