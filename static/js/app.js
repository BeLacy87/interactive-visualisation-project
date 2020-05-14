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
    
    //sliced sample values for bar graph, reverse so graph is desc
    var slicedSampleValues = sortedSampleValues.slice(0,3).reverse();
    var slicedOtu_ids = otu_ids.slice(0,3).reverse();

    console.log(names);    
    console.log(`otu_ids: ${otu_ids}`);   
    console.log(`otu_idValues: ${otu_idValues}`);  
    console.log(`sorted_otuIdValues: ${sortedIdValues}`);  
    console.log(`sample_values: ${sample_values}`);  
    console.log(`sortedSampleValues: ${sortedSampleValues}`);  
    console.log(`slicedSampleValues: ${slicedSampleValues}`); 
    console.log(metadata);  
    console.log (`otu_labels: ${otu_labels}`);
    
//bar chart
    var trace1={
      x: slicedSampleValues,
      y: slicedOtu_ids,
      type: "bar",
      orientation: "h"
    };

  var data= [trace1];

  var layout = {title: "Sample OTU"}

  Plotly.newPlot("plot", data, layout);

// //metadata panel
var panel = d3.select("#sample-metadata");
var table = panel.append("table");
var tbody = table.append("tbody");
Object.keys(metadata).forEach(function(key) {
    d3.select("tbody");
    var row = tbody.append("tr");
    var cell = row.append("td");
    cell.text(`${key}: `);
    var cell = row.append("td");
    cell.text(metadata[key]);
});

// //gauge plot  
  var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: metadata.wfreq,
      title: { text: 'Belly Button Washing Frequency<br>Scrubs per week' },
      type: "indicator",
      mode: "gauge+number",
      gauge: { axis: { range: [null, 9] }}
    }
  ];
  
  var layout = { 
    width: 500, 
    height: 400,
    margin: { t: 0, b: 0 } 
    };
  Plotly.newPlot('gauge', data, layout);


//bubble plot
var trace2 = {
  x: otu_idValues,
  y: sample_values,
  text: otu_labels,
  mode: 'markers',
  marker: {
    size: sample_values,
    sizemode: 'area',
    color: otu_idValues
  }
};

var data = [trace2];

var layout = {
  title: 'Sample values of each OTU',
  xaxis:{title: "OTU ID"},
  showlegend: false,
  height: 600,
  width: 1150
};

Plotly.newPlot('bubble', data, layout);

})};
  getData(); 
