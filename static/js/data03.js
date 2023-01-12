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


// const dataPromise = d3.json('./metadata.json'); // This is a d3 method to read json
// console.log('Data Promise: ', dataPromise);

// // Fetch the JSON data and console log it
// d3.json('./metadata.json').then(function(mydata) {
//   console.log('step 1');
//   console.log('the Json data', mydata);
//   console.log('step 2');
// });


const dataPromise = d3.json(url); // This is a d3 method to read json
console.log('Data Promise: ', dataPromise);


// const data = require('./metadata.json');
// console.log(data);


d3.json(url).then((response) => {
  return response.json();
})
    .then((response) => console.log(response.age[3]));


// console.log('age', response.age);

// import data from './metadata.json' assert { type: 'JSON' };
// console.log(data);

// console.log('my dataset');
// console.log('some data ', data );

