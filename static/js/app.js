

  // // Grab values from the data json object to build the plots
  var names = data.names;
  var metadata = data.metadata[0];
  var samples = data.samples;
  var otu_ids= data.samples[0].otu_ids.map(id =>{
    return "OTU " + id
  });
  var sample_values=data.samples[0].sample_values;
  var sortedSampleValues=sample_values.sort((a,b)=> b-a);
  var slicedSampleValues = sortedSampleValues.slice(0,3);
  

  console.log(names);
  console.log(metadata);
  console.log(samples);
  console.log(otu_ids);
  console.log(sample_values); 

var trace1=[{
  x: slicedSampleValues,
  y: otu_ids,
  type: "bar",
  orientation: "h"
}];

var layout = {title: "Sample OTU"}

Plotly.newPlot("plot", trace1, layout);


//metadata panel
console.log(metadata);
var mdList = d3.entries(metadata);
console.log(mdList);


var panel = d3.select("#sample-metadata");
var table = panel.append("table");
var tbody = table.append("tbody")



// var panelBody = panel.append("div")

mdList.forEach((metaRow) => {
  var row = tbody.append("tr");
  Object.entries(metaRow).forEach(value => {
    var cell = row.append("td");
    cell.text(value);
  });
});
 








  
  //gauge plot
  

  // var data = [
  //   {
  //     domain: { x: [0, 1], y: [0, 1] },
  //     value: 270,
  //     title: { text: "Speed" },
  //     type: "indicator",
  //     mode: "gauge+number"
  //   }
  // ];
  
  // var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
  // Plotly.newPlot('gauge', data, layout);












  // //bubble plot


  // var trace1 = {
  //   x: [1, 2, 3, 4],
  //   y: [10, 11, 12, 13],
  //   text: ['A<br>size: 40', 'B<br>size: 60', 'C<br>size: 80', 'D<br>size: 100'],
  //   mode: 'markers',
  //   marker: {
  //     size: [400, 600, 800, 1000],
  //     sizemode: 'area'
  //   }
  // };
  
  // var trace2 = {
  //   x: [1, 2, 3, 4],
  //   y: [14, 15, 16, 17],
  //   text: ['A</br>size: 40</br>sixeref: 0.2', 'B</br>size: 60</br>sixeref: 0.2', 'C</br>size: 80</br>sixeref: 0.2', 'D</br>size: 100</br>sixeref: 0.2'],
  //   mode: 'markers',
  //   marker: {
  //     size: [400, 600, 800, 1000],
  //     //setting 'sizeref' to lower than 1 decreases the rendered size
  //     sizeref: 2,
  //     sizemode: 'area'
  //   }
  // };
  
  // var trace3 = {
  //   x: [1, 2, 3, 4],
  //   y: [20, 21, 22, 23],
  //   text: ['A</br>size: 40</br>sixeref: 2', 'B</br>size: 60</br>sixeref: 2', 'C</br>size: 80</br>sixeref: 2', 'D</br>size: 100</br>sixeref: 2'],
  //   mode: 'markers',
  //   marker: {
  //     size: [400, 600, 800, 1000],
  //     //setting 'sizeref' to less than 1, increases the rendered marker sizes
  //     sizeref: 0.2,
  //     sizemode: 'area'
  //   }
  // };
  
  // // sizeref using above forumla
  // var desired_maximum_marker_size = 40;
  // var size = [400, 600, 800, 1000];
  // var trace4 = {
  //   x: [1, 2, 3, 4],
  //   y: [26, 27, 28, 29],
  //   text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
  //   mode: 'markers',
  //   marker: {
  //     size: size,
  //     //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
  //     sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
  //     sizemode: 'area'
  //   }
  // };
  
  // var data = [trace1, trace2, trace3, trace4];
  
  // var layout = {
  //   title: 'Bubble Chart Size Scaling',
  //   showlegend: false,
  //   height: 600,
  //   width: 600
  // };
  
  // Plotly.newPlot('bubble', data, layout);