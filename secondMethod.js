const _input = document.querySelector('input')
const _button = document.querySelector('button')
let img = document.querySelector('img')
let span = document.querySelector('span')

_button.addEventListener('click', () => {
    _input.click()

    _input.onchange = event => {
        const file = event.target.files[0]

        if (!file) return

        img.src = URL.createObjectURL(file)
        span.style.display = 'none'
        img.style.display = 'initial'
    }
})