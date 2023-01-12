<h1> Jeff Pinegar </h1>
jeffpinegar1@gmail.com <br>
717-982-0515
<hr>
# belly-button-challenge
Module 14 Challenge  Belly Button Biodiversity dataset interactive visualization


<h1> Overview</h1>
In this challenge we construct a dashboard base on data from an internet based json.  The dashboard includes 3 charts, (1) bar chart, (2) bubble chart and (3) a gauge chart.  To improve maintainability the follow was done:

*	All javascript is separate from the html index files
*	Each chart is constructed in it’s own file
*	The data gathering and dashboard management was paced its own file.
<hr>
<h3>index.html</h3>
This file contains the html for rendering the dashboard.
<h3>dataAndMgmt.js</h3>
This javascript file contains the code for reading the data from the internet base json.  Once the original charts are displayed this file manages the change from one id to the another.
<h3>barChart.js</h3>
This javascript file collects the data and the set the layout for the plotly bar chart.  The final line injects the bar chart into the web page. 
<h3>bubbleChart.js</h3>
This javascript file collects the data and the set the layout for the plotly bubble chart.  The final line injects the bubble chart into the web page. 
<h3>guageChart.js</h3>
This javascript file collects the data and creates the gauge.   The gauge is constructed from low level elements.  The scale is made using slices of a pie chart. The needle is made from another pie chart slice.  The center of the needle is placed on the scale, and a slice is “aimed” at the center of the guage.
The final line injects the bubble chart into the web page. 
