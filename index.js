const conatiner = document.querySelector('#sketchContainer')

for (let i = 0; i<16; i++){
    const row = document.createElement('div')
    row.classList.add('row')
    row.style.height = 500/16
    for (let i = 0; i<16; i++){
        const col = document.createElement('div')
        col.classList.add('col')
        col.style.width = 500/16
        row.appendChild(col)
    }
    conatiner.appendChild(row)
}