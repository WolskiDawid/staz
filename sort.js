import {getPosts as apiGet} from './api.js'
let divsDiv = document.querySelector('#divs')
let fBtnT = document.querySelector('#fBtnT')
let rows = []

const getPosts = async () => {
    rows = await apiGet()
    buildDivs(rows)
}

const buildDivs = (rows) => {
    for (let i = 0; i < rows.length; i++) {
        let pDiv = document.createElement('div')
        pDiv.setAttribute('id', 'apiP')
        pDiv.innerHTML = `<div class='divUnder'>ID: ${rows[i].id}</div><div class='divUnder'>Tytuł: ${rows[i].title}</div><div class='divUnder'>Zawartość: ${rows[i].body}</div><div class='divUnder'>ID Użytkownika: ${rows[i].userId}</div>`
        divsDiv.appendChild(pDiv)
    }
}

const sortRows = () => {
    divsDiv.innerHTML = ''
    const formO = document.querySelector('#selectFormO')
    const formT = document.querySelector('#selectFormT')

    const sortedRows = rows.sort(function (row1, row2) {

        if(formT.value == 'asc'){
            if(formO.value == 'id'){
                return row1.id - row2.id
            }
            if(formO.value == 'userId'){
                return row1.userId - row2.userId
            }

            if(formO.value == 'title'){
            {if (row1.title < row2.title){return -1}
            if (row1.title > row2.title){return 1}
            return 0}}
            if(formO.value == 'body'){
            {if (row1.body < row2.body){return -1}
            if (row1.body > row2.body){return 1}
            return 0}}
        }

        else if(formT.value == 'desc'){
            if(formO.value == 'id'){
                return row2.id - row1.id
            }
            if(formO.value == 'userId'){
                return row2.userId - row1.userId
            }

            if(formO.value == 'title'){
            {if (row2.title < row1.title){return -1}
            if (row2.title > row1.title){return 1}
            return 0}}
            if(formO.value == 'body'){
            {if (row2.body < row1.body){return -1}
            if (row2.body > row1.body){return 1}
            return 0}}
        }   
    })
    
    //console.log(formO.value, formT.value, rows, rows.id, sortedRows);
    buildDivs(sortedRows)
}



fBtnT.addEventListener('click', sortRows)
fBtnT.addEventListener('click', sortRows)
getPosts()