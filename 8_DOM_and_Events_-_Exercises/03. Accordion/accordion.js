function toggle() {
    const button = document.getElementsByClassName('button')[0]
    const extra = document.getElementById('extra')

    if (button.textContent.toLowerCase() === 'more') {
        button.textContent = "Less"
        extra.style.display = 'block'
    } else {
        button.textContent = "More"
        extra.style.display = 'none'
    }
}