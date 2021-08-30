//When load page
document.addEventListener('DOMContentLoaded',() => {
    //First render divs
    renderDivs()
    //Then add event listener to the divs
    getCols()
})

const container = document.querySelector('#sketchContainer')
const paintDiv = document.querySelector('#paint')
const resetDiv = document.querySelector('#reset')
const scaleInp = document.querySelector('#scaleInput')

let color = [0, 0, 0]
let size = 16

paintDiv.addEventListener('click', () => {changeColor()})

resetDiv.addEventListener('click', () => {
    container.innerHTML = ''
    renderDivs()
    getCols()
})

scaleInp.addEventListener('change', (e) => {
    const scaleN = document.querySelector('#scaleNumber')
    size = e.target.value
    scaleN.textContent = `${size}x${size}`
})

const renderDivs = () => {
    //Create 16 rows
    for (let i = 0; i<16; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        row.style.height = 500/16
        //Create 16 divs in each row
        for (let i = 0; i<16; i++){
            const col = document.createElement('div')
            col.classList.add('col')
            col.style.width = 500/16
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
    e.target.style['background-color'] = `rgb(${color[0]},${color[1]},${color[2]})`
}

const changeColor = () => {
    color = [0, 0, 0]
}