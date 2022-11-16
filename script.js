const pass = document.querySelector('#password')
const p = document.querySelector('.passinfo')
const letters = /[a-z]/i
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 10

const verify = () => {
	if (
		minValue < pass.value.length &&
		pass.value.match(letters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.style.color = 'green'
		p.textContent = 'Masz bardzo dobre hasło'
	} else if (minValue < pass.value.length && pass.value.match(letters) && pass.value.match(numbers)) {
		p.style.color = 'orange'
		p.textContent = 'Masz dobre hasło'
	} else if (minValue > pass.value.length || !pass.value.match(letters) || !pass.value.match(numbers)) {
		p.style.color = 'red'
		p.textContent = 'Twoje hasło nie spełnia minimalnych wymagań!'
	} 
}

const check = () => {
    if (pass.value !== '') {
        verify()
    } else {
        p.style.color = ''
		p.textContent = 'Nie podano hasła...'
    }
}

pass.addEventListener('keyup', check)
