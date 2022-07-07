import errorUrl from './error.png';

export function createError(msg, pos) {
        let backAlert = document.createElement('div')
        const frontAlert = document.createElement('div')
        const btnErr = document.createElement('button')
        backAlert.setAttribute('id', 'backAlert')
        btnErr.setAttribute('class', 'closeEr')
        btnErr.innerText = 'Zamknij'
        backAlert.appendChild(frontAlert)
        frontAlert.innerHTML = `<img src="${errorUrl}"><p>Błąd!</p><p>${msg}</p>`
        document.body.append(backAlert)
        frontAlert.appendChild(btnErr)
        btnErr.addEventListener('click', () => {
            backAlert.remove()
            pos.focus()
        })
}


