// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNode(event) {

    let audioKeyCode = getKeyCode(event)

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    console.log(key)

    const cantFoundAnyKey = !key

    console.log(!cantFoundAnyKey)

    if (cantFoundAnyKey) {
        return
    }

    addPlayClass(key)
    playAudio(audioKeyCode)

}

function addPlayClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    // console.log(event.target.dataset.key)
    // console.log(event)
    let keyCode;

    const isKeyboard = event.type === 'keydown'
    if (isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    console.log(keyCode)

    return keyCode
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.curentTime = 0
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

function registerEvents() {
    // click with mouse
    keys.forEach( key => {
        // console.log(key.dataset.note)
        key.addEventListener('click', playNode)
        key.addEventListener('transitionend', removePlayingClass)
    })

    // keyboard type
    window.addEventListener('keydown', playNode)

}

window.addEventListener('load', registerEvents)
