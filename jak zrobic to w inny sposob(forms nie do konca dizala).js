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
fGender.setAttribute('class', 'disabledOpt')
fDate.setAttribute('class', 'disabledOpt')

const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
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
            let todayYear = new Date().getFullYear()
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

    
            if (dayOfBirth > 31) {
                createError('Źle wpisany pesel!')
            }
            const pesel = e.target.value
            firstNP = pesel[0] * 1
            secondNP = pesel[1] * 3
            thirdNP = pesel[2] * 7
            fourthNP = pesel[3] * 9
            fifthNP = pesel[4] * 1
            sixthNP = pesel[5] * 3
            seventhNP = pesel[6] * 7
            eighthNP = pesel[7] * 9
            ninthNP = pesel[8] * 1
            tenthNP = pesel[9] * 3
            elevnthNP = pesel[10]
    
            secondNP = secondNP %10
            thirdNP = thirdNP %10
            fourthNP = fourthNP %10
            sixthNP = sixthNP %10
            seventhNP = seventhNP %10
            eighthNP = eighthNP %10
            tenthNP = tenthNP %10
    
            let sum = firstNP + secondNP + thirdNP + fourthNP + fifthNP + sixthNP + seventhNP + eighthNP + ninthNP + tenthNP
            sum = sum.toString().slice(1,2)
            sum = 10 - sum

            if(sum != elevnthNP){createError('Źle wpisany pesel!')}
            let ageDiff = todayYear - fAge.value
            if(year != ageDiff){createError('Źle wpisany pesel lub wiek!')}

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

    const checkNames = (e) => {
        if(e.target.value == '' || !isNaN(e.target.value)){
            e.target.style.border = 'solid 1px red'
        }
        else{
            e.target.style.border = '0px'
        }
    }

    const checkAge = (e) => {
        if(e.target.value == '' || isNaN(e.target.value)){
            e.target.style.border = 'solid 1px red'
        }
        else{
            e.target.style.border = '0px'
        }
    }
    
    const isEmpty = (e) => {
        if(e.target.value == ''){
            e.target.style.border = 'solid 1px red'
        }
        else{
            e.target.style.border = '0px'
        }
    }
    
const setDarker = (elem) => {
    elem.setAttribute('class', 'darkerP')
}
const inputs = {
    name: {
        label: 'Imię',
        re: /^[A-Za-z]+$/
    },
    surname: {
        label: 'Nazwisko',
        extraCss: setDarker
    },
}

const validate = (elem, re = null) => {
    if((re && !re.test(elem.value) || !elem.value)){
        elem.style.border = 'solid 1px red'
    }
    else
    {
        elem.style.border = '0px'
    }
}
const form = document.forms['form']
for(name in inputs) {
    let input = form[name]
    input.addEventListener('blur', () => {
        validate(input,inputs[name].regex)
    })
    input.addEventListener('input', () => {
        validate(input,inputs[name].regex)
    })
}
    

const showData = () => {
    const resultDiv = document.createElement('div')
    let inputSettings = inputs[name]
    for(name in inputs) {
        const p = document.createElement('p')
        inputSettings.innerText =  inputSettings.label+' ' + form[name].value
        if(inputSettings.extraCss) {
            inputSettings.extraCss(form[name])
        }
    }
    div = resultDiv
}
    
btn.addEventListener('click', validateEverything)
btnEr.addEventListener('click', closeError)
