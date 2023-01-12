/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

// Jeff Pinegar
//

const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// Promise Pending
// this is a promise that the data will be delivered.
// java will not wait for the data it will keep going.


// function buildmetadata

const dataPromise = d3.json(url); // This is a d3 method to read json
console.log('Data Promise: ', dataPromise);


// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log('step 1');
  console.log(data);
  console.log('step 2');
});


console.log('step 3');
console.log('step 4');

// console.log('my dataset');
// console.log('some data ', data );


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
