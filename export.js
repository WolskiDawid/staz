let backAlert = null
export function createError(msg) {
        backAlert = document.createElement('div')
        const frontAlert = document.createElement('div')
        const btnErr = document.createElement('button')
        backAlert.setAttribute('id', 'backAlert')
        btnErr.setAttribute('class', 'closeEr')
        btnErr.innerText = 'Zamknij'
        backAlert.appendChild(frontAlert)
        frontAlert.innerHTML = `<img src="/error.png"><p>Błąd!</p><p>${msg}</p>`
        document.body.append(backAlert)
        frontAlert.appendChild(btnErr)

        btnErr.addEventListener('click', closeError)
}

const closeError = () => {
    backAlert.remove()
}
