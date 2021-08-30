//When load page
document.addEventListener('DOMContentLoaded',() => {
    //First render divs
    renderDivs(16)
    //Then add event listener to the divs
    getCols()
})

//Crates const with elements in index.html
const container = document.querySelector('#sketchContainer')
const paintDiv = document.querySelector('#paint')
const resetDiv = document.querySelector('#reset')
const scaleInp = document.querySelector('#scaleInput')
const raibowDiv = document.querySelector('#rainbow')
const eraserDiv = document.querySelector('#raiser')

//Set size and type
let size = 16
let type = 'default'

//Paint div event listener
paintDiv.addEventListener('click', () => {type = 'default'; select(paintDiv)})

//Reset div event listener
resetDiv.addEventListener('click', () => {
    //Set conatiner to ''
    container.innerHTML = ''
    //Render divs and get cols again with current size
    renderDivs(size)
    getCols()
})

//Scale input div event listener
scaleInp.addEventListener('change', (e) => {
    const scaleN = document.querySelector('#scaleNumber')
    size = e.target.value //Change variable size according to input value
    scaleN.textContent = `${size}x${size}` //Change p to current size
    container.innerHTML = '' //Set container to ''
    //Render divs and get cols again but with the new size
    renderDivs(size)
    getCols()
})

//Rainbow div event listener
raibowDiv.addEventListener('click', () => {type = 'random'; select(raibowDiv)})

//Eraser div event listener
eraserDiv.addEventListener('click', () => {type = 'erase'; select(eraserDiv)})

const renderDivs = (scale) => {
    //Create 16 rows
    for (let i = 0; i<scale; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        row.style.height = 500/scale
        //Create 16 divs in each row
        for (let i = 0; i<scale; i++){
            const col = document.createElement('div')
            col.classList.add('col')
            col.style.width = 500/scale
            //Add the div to the row
            row.appendChild(col)
        }
        //Add the row to the conatiner
        container.appendChild(row)
    }
}   

//Create event listener to each div
const getCols = () => {
    const cols = document.querySelectorAll('.col')
    cols.forEach(col => {
        col.addEventListener('mouseover', (evt) => changeBackgorundColor(evt))
    })
}



//Change the background color depending on the let color value
const changeBackgorundColor = (e) => {
    if (type === 'default') {
        e.target.style['background-color'] = 'rgb(0,0,0)'
    }
    else if (type === 'random'){
        e.target.style['background-color'] = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }
    else{
        e.target.style['background-color'] = 'rgb(255,255,255)'
    }
}

//Change border when option is selected
const select = (node) => {
    document.querySelectorAll('.option').forEach((option) => {
        option.style.border = '5px solid black'
    })
    
    node.style.border = '5px solid greenyellow'
}