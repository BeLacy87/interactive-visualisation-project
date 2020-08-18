const url = "data/epicore_hj.json";

function init (){
    d3.json(url).then((object)=>{
        console.log(object)
    //select columns and store in array, filter, sort, etc
    var master_auto = []
    var master_man = []
    var status = []
    Object.entries(object).forEach(([key, value]) =>{
        switch(key){
            case 'Master Issue - automated':
                Object.entries(value).forEach(([key, value])=>{
                    master_auto.push(value)                
                    })   
                break;
            case 'Master Issue - manual':
                Object.entries(value).forEach(([key, value])=>{
                    master_man.push(value)                
                    })   
                break;
            case 'Error Status':
                Object.entries(value).forEach(([key, value])=>{
                    status.push(value)                
                    })   
                break;
            default:
                break;
            }                 
        }
    )
    // console.log(master_auto)
    // console.log(master_man)
    // console.log(status)

//chart for auto
   var trace_1 ={
       type: "histogram",
       mode: "lines",
       name: "master auto",
       x: master_auto
   }

    var data = [trace_1];

    var layout= {
        title: 'Count of Master Issues - Auto'
    }
    Plotly.newPlot('auto', data, layout);

//chart for manual
    var trace_2 ={
        type: "histogram",
        mode: "lines",
        name: "master man",
        x: master_man
    }
 
      var data = [trace_2];
 
     var layout= {
         title: 'Count of Master Issues - Manual'
     }
     Plotly.newPlot('man', data, layout);

    })
}

init()