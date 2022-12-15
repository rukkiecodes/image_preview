const _image_preview = document.querySelector('.image_preview')

let img = document.querySelector('img')
let span = document.querySelector('span')


_image_preview.addEventListener('click', () => {
    const _input = document.createElement('input')
    _input.setAttribute('type', 'file')

    _input.click()

    _input.onchange = event => {
        const file = event.target.files[0]

        if (!file) return

        img.src = URL.createObjectURL(file)
        span.style.display = 'none'
        img.style.display = 'initial'
    }
})
