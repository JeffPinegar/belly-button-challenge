/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

// Jeff Pinegar
//

const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';
// This url was use to fetch the data using python.  The json was then save as a file.


// // Fetch the JSON data from the file and console log
// fetch('./metadata.json').then((response) => {
//   return response.json();
// })
// //    .then((response) => console.log(response.age[3]));
//     .then((response) => console.log(response));


fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.metadata[0]));
    .then((data) =>console.log(data));

// import myjson from url assert { type: "json" };
// console.log(myjson);

// const dataframe=require(url);
// console.log(dataframe);

