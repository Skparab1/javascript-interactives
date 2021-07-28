
let table = []

function preload(){
  table = loadTable("https://pkgstore.datahub.io/core/usa-education-budget-analysis/budget_csv/data/e1f21ece51266b251d4431c3c5bb9d79/budget_csv.csv","csv","header")
}

var spending;

function setup() {
  
  console.log(table.getRowCount());
  console.log(table.columns);
  
  spending = table.columns[2];
  
  print(spending[1]);
  
  
  let deptNames = table.getColumn(0);

  for(i = 0; i < table.getRowCount(); i ++){
    print(spending[i]);
  }

}


function draw() {

}
