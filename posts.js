import {getPosts as apiGet} from './api.js'
let divsDiv = document.querySelector('#divs')
let fId = document.querySelector('#fId')
let fTitle = document.querySelector('#fTitle')
let fBody = document.querySelector('#fBody')
let fUserId = document.querySelector('#fUserId')
let fBtn = document.querySelector('#fBtn')
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

const filterRows = () => {
    divsDiv.innerHTML = ''
    const filteredRows = rows.filter(function (e) {
        return (!fId.value || e.id == fId.value)
         && (!fTitle.value || e.title.search(fTitle.value) !== -1) 
         && (!fBody.value || e.body.search(fBody.value) !== -1) 
         && (!fUserId.value || e.userId == fUserId.value)
    })
    console.log(filteredRows);
    buildDivs(filteredRows)
}

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}



fBtn.addEventListener('click', filterRows)
sideBarOpen.addEventListener('click', openNav)
sideBarClose.addEventListener('click', closeNav)
getPosts()

