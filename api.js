// GET
import axios from 'axios';

let mainDiv = document.querySelector('#main')

export function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => buildDivs(res.data))
    .catch((err) => console.log(err)) 
}
    
const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";   
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}
const buildDivs = (rows) => {
    for(let i=0; i < rows.length; i++) {
        let pDiv = document.createElement('p')
        pDiv.setAttribute('id', 'apiP')
        pDiv.innerText = rows[i].body + rows[i].id + rows[i].title + rows[i].userId
        mainDiv.appendChild(pDiv)
    }
}


sideBarOpen.addEventListener('click', openNav)
sideBarClose.addEventListener('click', closeNav)
getPosts()