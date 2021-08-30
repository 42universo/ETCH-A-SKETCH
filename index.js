//When load page
document.addEventListener('DOMContentLoaded',() => {
    //First render divs
    renderDivs(16)
    //Then add event listener to the divs
    getCols()
})

const container = document.querySelector('#sketchContainer')
const paintDiv = document.querySelector('#paint')
const resetDiv = document.querySelector('#reset')
const scaleInp = document.querySelector('#scaleInput')
const raibowDiv = document.querySelector('#rainbow')
const eraserDiv = document.querySelector('#raiser')

let size = 16
let type = 'default'

paintDiv.addEventListener('click', () => {type = 'default'; select(paintDiv)})

resetDiv.addEventListener('click', () => {
    container.innerHTML = ''
    renderDivs(size)
    getCols()
})

scaleInp.addEventListener('change', (e) => {
    const scaleN = document.querySelector('#scaleNumber')
    size = e.target.value
    scaleN.textContent = `${size}x${size}`
    container.innerHTML = ''
    renderDivs(size)
    getCols()
})

raibowDiv.addEventListener('click', () => {type = 'random'; select(raibowDiv)})

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

const select = (node) => {
    document.querySelectorAll('.option').forEach((option) => {
        option.style.border = '5px solid black'
    })
    
    node.style.border = '5px solid greenyellow'
}