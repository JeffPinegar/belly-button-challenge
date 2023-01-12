/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
console.log('I\'m alive');
d3.selectAll('#selDataset').on('change', myID);
// This function is called when a dropdown menu item is selected
// //function updatePlotly() {
function myID() {
  // Use D3 to select the dropdown menu
  const dropdownMenu = d3.select('#selDataset');
  // Assign the value of the dropdown menu option to a variable
  const dataset = dropdownMenu.property('value');
  // const dataset = dropdownMenu.attr('value');   // attr doesn't work here
  console.log('I got here: ', dataset);
}
myID();
