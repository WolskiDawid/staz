// GET
import axios from 'axios';

export function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => buildDivs(res.data))
    .catch((err) => console.log(err)) 
}

let divsDiv = document.querySelector('#divs')
let fId = document.querySelector('#fId')
let fTitle = document.querySelector('#fTitle')
let fBody = document.querySelector('#fBody')
let fUserId = document.querySelector('#fUserId')    

const buildDivs = (rows) => {
    for(let i=0; i < rows.length; i++) {
        let pDiv = document.createElement('div')
        pDiv.setAttribute('id', 'apiP')
        pDiv.innerHTML = `<div class='divUnder'>ID: ${rows[i].id}</div><div class='divUnder'>Tytuł: ${rows[i].title}</div><div class='divUnder'>Zawartość: ${rows[i].body}</div><div class='divUnder'>ID Użytkownika: ${rows[i].userId}</div>`
        divsDiv.appendChild(pDiv)   
    }
}

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";   
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}


fId.addEventListener('input', buildDivs)
fId.addEventListener('blur', buildDivs) 
sideBarOpen.addEventListener('click', openNav)
sideBarClose.addEventListener('click', closeNav)
getPosts()
