
let table;

function preload() {
  table = loadTable("https://pkgstore.datahub.io/core/glacier-mass-balance/glaciers_csv/data/c04ec0dab848ef8f9b179a2cca11b616/glaciers_csv.csv","csv","header")
}

function setup() {
  
  createCanvas(1000,1000);
  
  print(table.getRowCount());
  
  let rowNum = table.getRowCount();
  
  let meanLoss = table.getColumn("Mean cumulative mass balance");
  
  let years = table.getColumn("Year");
  
  for(let i = 0; i < meanLoss.length; i++){
    print(meanLoss[i]);
    rect(100 + 8*i,1000,20,meanLoss[i]*50);
    console.log(year[i], 120+8*i,i*20);
  }
  
}


function draw() {

}
