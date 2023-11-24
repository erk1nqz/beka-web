const playSound = () => {
    let sound = document.querySelector('#deleteSound');
    sound.play()
}

document.addEventListener('keydown', event => {
    if (event.key === 'Backspace') {
        playSound()
    }
})