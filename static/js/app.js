//setup initial empty arrays

  
  var samples = [];
  var names = [];
  var otu_idValues= [];
  var sample_values=[];
  var metadata=[];
  var otu_ids =[];
  var otu_labels = [];
  

//start json calls
  const url = "data/limited_data.json";
  
//fill the above arrays
function getData (){
  d3.json(url).then((object) => {
    console.log(object);
    var names = object.names;
    var otu_idValues = object.samples[0].otu_ids;
    var sample_values = object.samples[0].sample_values;
    var otu_labels= object.samples[0].otu_labels;
    var metadata = object.metadata[0];
//basic sorts/manipulations
    otu_idValues.forEach(val => {
      otu_ids.push(`OTU ${val}`);
      });
    //sorts IdValues for charts
    var sortedIdValues= otu_idValues.map(i => {
      return i;
    });
    sortedIdValues.sort((a,b)=>{
      return b-a;
    })
    // sorts sampleValues for charts
    var sortedSampleValues= sample_values.map(i => {
      return i;
    });
    sortedSampleValues.sort((a,b)=>{
      return b-a;
    })
    //sliced sample values for bar graph
    var slicedSampleValues = sortedSampleValues.slice(0,3);

    console.log(names);    
    console.log(`otu_ids: ${otu_ids}`);   
    console.log(`otu_idValues: ${otu_idValues}`);  
    console.log(`sorted_otuIdValues: ${sortedIdValues}`);  
    console.log(`sample_values: ${sample_values}`);  
    console.log(`sortedSampleValues: ${sortedSampleValues}`);  
    console.log(`slicedSampleValues: ${slicedSampleValues}`); 
    console.log(metadata);  
    console.log (`otu_labels: ${otu_labels}`);
    

    var trace1={
      x: slicedSampleValues,
      y: otu_ids,
      type: "bar",
      orientation: "h"
    };

  var data= [trace1];

  var layout = {title: "Sample OTU"}

  Plotly.newPlot("plot", data, layout);


})};
  getData(); 
  





// //metadata panel





// var panel = d3.select("#sample-metadata");
// var table = panel.append("table");
// var tbody = table.append("tbody");

// metadata.forEach(val=>{
//   console.log(val); 
// })



 








  
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




  var trace2 = {
    x: otu_idValues,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
      size: sample_values,
      sizemode: 'area',
      color: sample_values
    }
  };
  
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
  
  // sizeref using above forumla
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
  
  var data = [trace2];
  
  var layout = {
    title: 'Bubble Chart Size Scaling',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data, layout);