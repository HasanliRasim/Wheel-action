const wheelDiv = document.querySelector('#div1')
const wheel = document.querySelector('#carWheel')

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        wheel.style.marginTop = '400px'
    }
    if (event.key === "ArrowUp") {
        wheel.style.marginBottom = '400px'
    }
    if (event.key === "ArrowRight") {
        wheel.style.marginLeft = '500px'
    }
    if (event.key === "ArrowLeft") {
        wheel.style.marginRight = '500px'
    }
})

















