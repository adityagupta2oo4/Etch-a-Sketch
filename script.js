//creating the container

const container = document.createElement("div");
const body = document.querySelector("body");
//setting it's propert

container.classList.add("container")
body.appendChild(container);

// hieght and width is fixed user choose how many grid they want

function createGrid(row,col){

    //setting the indivual grid size
    let box_base = (700)/col;
    let box_hieght = (500)/row ;
    
    
    // total grid
    let total = row*col;

    for(let i = 0 ; i<total; i++){

        // to append
        const div = document.createElement("div");
        
        
        //dynamically setting the size of the grid based on user input
        div.style.setProperty("width",`${box_base}px`);
        div.style.setProperty("height" ,`${box_hieght}px`);
        div.classList.add(`${i}`); // adding class
        container.appendChild(div);


            
        // adding the event listener for color
        div.addEventListener("mouseover",() => {
            // from the userr wwhich has return type of string #____
            let color = document.getElementById("colorPicker").value;
            div.style.backgroundColor = `${color}`;
        });

    }
}

const submit_buton = document.getElementById("submit");

submit_buton.addEventListener("click", () =>{
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    const row_input = document.getElementById("row").value;
    const colum_input = document.getElementById("column").value;

    createGrid(row_input,row_input);

});



