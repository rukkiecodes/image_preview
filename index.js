const _input = document.querySelector('input')
let img = document.querySelector('img')
let span = document.querySelector('span')

_input.onchange = event => {
    const file = event.target.files[0]

    if (!file) return

    img.src = URL.createObjectURL(file)
    span.style.display = 'none'
    img.style.display = 'initial'
}