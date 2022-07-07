import { createError } from './errorScript';
import { validateEmail } from './valMail.js';
import { addPrefixZero } from './addPrefixZero.js';
import { stringContainsNumber } from './containNumber.js';  

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
fGender.setAttribute('class', 'disabledOpt')
fDate.setAttribute('class', 'disabledOpt')

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
    fDesc.value == '' ? fDesc.value = 'brak' : fDesc.value = fDesc.value
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
    
    fPesel.addEventListener('input', (e) => {        
        if(e.target.value.length == 11){
            let data = new Date()
            let data2 = new Date()
            let todayYear = new Date().getFullYear()
            let todayDate = data2.getFullYear() + '-' + (addPrefixZero(data2.getMonth()+1)) + '-' + addPrefixZero(data2.getDate());
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
                createError('Źle wpisany pesel!', fPesel)
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

            data = year + '-' + monthOfBirth + '-' + dayOfBirth
            
            let sum = firstNP + secondNP + thirdNP + fourthNP + fifthNP + sixthNP + seventhNP + eighthNP + ninthNP + tenthNP
            sum = sum.toString().slice(1,2)
            sum = 10 - sum

            let dataToCheck1 = monthOfBirth + '-' + dayOfBirth
            let dataToCheckToday = (addPrefixZero(data2.getMonth()+1)) + '-' + addPrefixZero(data2.getDate());

            if(sum != elevnthNP){createError('Źle wpisany pesel!', fPesel)}
            let ageDiff = todayYear - fAge.value

                if(dataToCheckToday >= dataToCheck1){
                    if(year != ageDiff){createError('Źle wpisany pesel lub wiek!', fPesel)}
                } 
                else{
                    if(year != ageDiff-1){createError('Źle wpisany pesel lub wiek!', fPesel)}
                }

            console.log(sum, pesel[10]);

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
        if(!fName.value.length == '' && !stringContainsNumber(fName.value)){
            if(!fSurname.value.length == '' && !stringContainsNumber(fName.value)){
            if(!isNaN(parseInt(fAge.value))){
                if(validateEmail(fMail.value)){
                    if(div) {
                        div.remove()
                    }
                        if(!isNaN(parseInt(fPesel.value))){
                            showData()
                        }else{
                            createError('Źle wpisany pesel!', fPesel)
                        }

                }
                else{
                    createError('Błędnie podany email!', fMail)
                }
        
            }else{
                createError('Wiek musi być liczbą!', fAge)
            }
        }
        else{
            createError('Błędne nazwisko!', fSurname)
        }
    }
    else{
        createError('Błędne imie!', fName)
    }}

    const checkNames = (e) => {
        (e.target.value == '' || stringContainsNumber(e.target.value)) ? e.target.style.border = 'solid 1px red' : e.target.style.border = '0px'
    }
    const checkAge = (e) => {
        (e.target.value == '' || !stringContainsNumber(e.target.value)) ? e.target.style.border = 'solid 1px red' : e.target.style.border = '0px'
    }
    const isEmpty = (e) => {
        (e.target.value == '') ? e.target.style.border = 'solid 1px red' : e.target.style.border = '0px'
    }



fName.addEventListener('blur', checkNames)
fName.addEventListener('input', checkNames)
fSurname.addEventListener('blur', checkNames)
fSurname.addEventListener('input', checkNames)
fAge.addEventListener('blur', checkAge)
fAge.addEventListener('input', checkAge)
fMail.addEventListener('blur', isEmpty)
fMail.addEventListener('input', isEmpty)
fPesel.addEventListener('blur', isEmpty)
fPesel.addEventListener('input', isEmpty)
btn.addEventListener('click', validateEverything)
