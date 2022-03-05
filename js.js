//create the 16x16 grid

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener("mouseover",function(){
      cell.style.backgroundColor="black"
    })
    
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

//mouse hover/change background color
