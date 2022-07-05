const btn = document.querySelector('#save')    
let fName = document.querySelector('#name')
let fSurname = document.querySelector('#surname')
let fAge = document.querySelector('#age') 
let fMail = document.querySelector('#mail')
let fDate = document.querySelector('#date')
let fPesel = document.querySelector('#pesel')
let fDesc = document.querySelector('#desc')
let fSelect = document.querySelector('#sgender')
let fGender = fSelect
let div = null;
let er = document.getElementById('er')
let closeBtn = document.querySelector('.closeEr')
const backAlert = document.createElement('div')
const frontAlert = document.createElement('div')
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
    const pInfoDate = document.createElement('p')
    const pInfoPesel = document.createElement('p')
    resultDiv.append(pInfoName, pInfoSurname, pInfoAge, pInfoMail, pInfoDesc, pInfoGender, pInfoDate, pInfoPesel)
    pInfoName.innerText = 'Imię: ' + fName.value
    pInfoSurname.innerText = 'Nazwisko: ' + fSurname.value
    pInfoAge.innerText = 'Wiek: ' + fAge.value
    pInfoMail.innerText = 'Email: ' + fMail.value
    pInfoDesc.innerText = 'Opis: ' + fDesc.value
    pInfoGender.innerText = 'Płeć: ' + fGender.value
    pInfoDate.innerText = 'Data urodzenia: ' + fDate.value
    pInfoPesel  .innerText = 'Pesel: ' + fPesel.value
    resultDiv.setAttribute('id', 'result')
    pInfoName.setAttribute('class', 'darkerP')
    pInfoAge.setAttribute('class', 'darkerP')
    pInfoDesc.setAttribute('class', 'darkerP')
    pInfoDate.setAttribute('class', 'darkerP')
    div = resultDiv
}


const createError = (msg) => {
    backAlert.setAttribute('id', 'backAlert')
        btnEr.setAttribute('class', 'closeEr')
        btnEr.innerText = 'Zamknij'
        backAlert.appendChild(frontAlert)
        frontAlert.innerHTML = `<img src="error.png"><p>Błąd!</p><p>${msg}</p>`
        document.body.append(backAlert)
        frontAlert.appendChild(btnEr)
    }
    
    const addPrefixZero = (number) => {
        if(number > 9) {
            return number
        }
        return `0${number}`
    }

    const closeError = () => {
        backAlert.remove()
        btnEr.remove()
        frontAlert.remove()
    }
    
    fPesel.addEventListener('input', (e) => {        
        if(e.target.value.length == 11){
            let data = new Date()
            let dayOfBirth = e.target.value.slice(4,6)
            let monthOfBirth = e.target.value.slice(2,4)
            let yearOfBirth = e.target.value.slice(0, 2)
            let genderNumber = e.target.value.slice(9, 10)
            
            console.log(yearOfBirth, monthOfBirth%20)

            let multiplier = Math.floor(monthOfBirth/20)
            let year = 1800;
            if(multiplier < 4) {
                year = 1900 + multiplier*100;
            }
            year = (year)+parseInt(yearOfBirth)
            monthOfBirth = addPrefixZero(monthOfBirth%20)

    
                    if(dayOfBirth>31){createError('Źle wpisany pesel!')}
                    const pesel = e.target.value
                    let firstNP = pesel[0] *= 1
                    let secondNP = pesel[1] *= 3
                    let thirdNP = pesel[2] *= 7
                    let fourthNP = pesel[3] *= 9
                    let fifthNP = pesel[4] *= 1
                    let sixthNP = pesel[5] *= 3
                    let seventhNP = pesel[6] *= 7
                    let eighthNP = pesel[7] *= 9
                    let ninthNP = pesel[8] *= 1
                    let tenthNP = pesel[9] *= 3
                    let elevnthNP = pesel[10]

                    firstNP = firstNP.toString()
                    secondNP = secondNP.toString()
                    thirdNP = thirdNP.toString()
                    fourthNP = fourthNP.toString()
                    fifthNP = fifthNP.toString()
                    sixthNP = sixthNP.toString()
                    seventhNP = seventhNP.toString()
                    eighthNP = eighthNP.toString()
                    ninthNP = ninthNP.toString()
                    tenthNP = tenthNP.toString()

                    if(firstNP.length != 1)
                    {firstNP = firstNP.slice(1,2)}
                    if(secondNP.length != 1)
                    {secondNP = secondNP.slice(1,2)}
                    if(thirdNP.length != 1)
                    {thirdNP = thirdNP.slice(1,2)}
                    if(fourthNP.length != 1)
                    {fourthNP = fourthNP.slice(1,2)}
                    if(fifthNP.length != 1)
                    {fifthNP = fifthNP.slice(1,2)}
                    if(sixthNP.length != 1)
                    {sixthNP = sixthNP.slice(1,2)}
                    if(seventhNP.length != 1)
                    {seventhNP = seventhNP.slice(1,2)}
                    if(eighthNP.length != 1)
                    {eighthNP = eighthNP.slice(1,2)}
                    if(ninthNP.length != 1)
                    {ninthNP = ninthNP.slice(1,2)}
                    if(tenthNP.length != 1)
                    {tenthNP = tenthNP.slice(1,2)}

                    let sum = parseInt(firstNP) + parseInt(secondNP) + parseInt(thirdNP) + parseInt(fourthNP) + parseInt(fifthNP) + parseInt(sixthNP) + parseInt(seventhNP) + parseInt(eighthNP) + parseInt(ninthNP) + parseInt(tenthNP)

                    sum = sum.toString().slice(1,2)

                    sum = 10 - sum

                    if(sum != elevnthNP){createError('Źle wpisany pesel!')}

                    console.log(sum, pesel[10]);

            data = year + '-' + monthOfBirth + '-' + dayOfBirth
            console.log(year, monthOfBirth, dayOfBirth);
            if(genderNumber % 2 == 0){
                fGender.value = 'Kobieta'
            }
            else{
                fGender.value = 'Mężczyzna'
            }
            fDate.value = data
        }
    })
    
    const validateEverything = () => {
        if(fName.value.length !== 0){
            if(fSurname.value.length !== 0){
            if(!isNaN(parseInt(fAge.value))){
                if(validateEmail(fMail.value)){
                    if(div) {
                        div.remove()
                    }
                        if(!isNaN(parseInt(fPesel.value))){
                            showData()
                        }else{
                            createError('Źle wpisany pesel!')
                        }

                }
                else{
                    createError('Błędnie podany email!')
                }
        
            }else{
                createError('Wiek musi być liczbą!')
            }
        }
        else{
            createError('Podaj nazwisko!')
        }
    }
    else{
        createError('Podaj imie!')
    }}

btn.addEventListener('click', validateEverything)
btnEr.addEventListener('click', closeError)
