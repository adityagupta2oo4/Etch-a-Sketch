//creating the container

const container = document.createElement("div");
const body = document.querySelector("body");
//setting it's propert

container.classList.add("container")
body.appendChild(container);

//getting the input from the user how many grid he want





function createGrid(row,col){

    //setting the grid
    let box_base = (700)/col;
    let box_hieght = (500)/row ;
    
    
    
    let total = row*col;

    for(let i = 0 ; i<total; i++){


        const div = document.createElement("div");
        
        

        div.style.setProperty("width",`${box_base}px`);
        div.style.setProperty("height" ,`${box_hieght}px`);
        div.classList.add(`${i}`);
        container.appendChild(div);


            

        div.addEventListener("mouseover",() => {
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



