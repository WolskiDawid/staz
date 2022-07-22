import {getPosts as apiGet, getPosts} from './api.js'
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
    const sortedRows = rows.sort()
    const formO = document.querySelector('selectFormO')
    const formT = document.querySelector('selectFormT')
    console.log(formO, formT, rows);
}

getPosts()
sortRows()