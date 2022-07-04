const btn = document.querySelector('#save')    
let fName = document.querySelector('#name')
let fSurname = document.querySelector('#surname')
let fAge = document.querySelector('#age') 
let fMail = document.querySelector('#mail')
let fDesc = document.querySelector('#desc')
let fSelect = document.querySelector('#sgender')
let fGender = fSelect
let div = null;
let er = document.getElementById('er')
let closeBtn = document.querySelector('.closeEr')
const backAlert = document.createElement('div')
const alert = document.createElement('div')
const btnEr = document.createElement('button')

const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

    const showData = () => {
        const resultDiv = document.createElement('div')
        document.body.appendChild(resultDiv)
        const pInfoName = document.createElement('p')
        const pInfoSurname = document.createElement('p')
        const pInfoAge = document.createElement('p')
        const pInfoMail = document.createElement('p')
        const pInfoDesc = document.createElement('p')
        const pInfoGender = document.createElement('p')
        resultDiv.append(pInfoName, pInfoSurname, pInfoAge, pInfoMail, pInfoDesc, pInfoGender)
        pInfoName.innerText = 'Imię: ' + fName.value
        pInfoSurname.innerText = 'Nazwisko: ' + fSurname.value
        pInfoAge.innerText = 'Wiek: ' + fAge.value
        pInfoMail.innerText = 'Email: ' + fMail.value
        pInfoDesc.innerText = 'Opis: ' + fDesc.value
        pInfoGender.innerText = 'Płeć: ' + fGender.value
        resultDiv.setAttribute('id', 'result')
        div = resultDiv
    }

    const validateEverything = () => {
        if(fName.value.length !== 0){
        if(fSurname.value.length !== 0){
            if(!isNaN(parseInt(fAge.value))){
                if(validateEmail(fMail.value)){
                    if(div) {
                        div.remove()
                    }
                        showData()
                }
                else{
                    createError()
                }
        
            }else{
                alert('Wiek musi być liczbą!')
            }
        }
        else{
            alert('Podaj nazwisko!')
        }
    }
    else{
        alert('Podaj imie!')
    }
}

const createError = (msg) => {
    backAlert.setAttribute('id', 'backAlert')
    btnEr.setAttribute('class', 'closeEr')
    btnEr.innerText = 'Zamknij'
    backAlert.appendChild(alert)
    alert.innerHTML = `<img src="error.png"><p>Błąd!</p><p>${msg}!</p>`
    document.body.append(backAlert)
    alert.appendChild(btnEr)
}

const closeError = () => {
    backAlert.remove()
    btnEr.remove()
    alert.remove()
}


btn.addEventListener('click', validateEverything)
btnEr.addEventListener('click', closeError)
