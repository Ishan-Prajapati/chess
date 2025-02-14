const table  =  document.querySelector('table')
// const row_size = document.getElementById('row').value;
// const col_size = document.getElementById('col').value;
// const btn = document.querySelector('button')


console.log(table)

function chessbox(row,col){

    // const row = document.getElementById('row').value;
    // const col = document.getElementById('col').value;
    for(let i = 0;i<row;i++){
        const tr = document.createElement('tr')
        table.appendChild(tr)
        for(let j = 0; j<col;j++){
            const td = document.createElement('td')
            tr.appendChild(td)
        }
    }
}

chessbox(10,10)

// btn.addEventListener('click',chessbox)