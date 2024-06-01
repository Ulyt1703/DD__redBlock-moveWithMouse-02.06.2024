let bulleanFalse = false
let centerX = window.innerWidth / 2
let centerY = window.innerHeight / 2
let redBlock = document.querySelector(".red-block")
let targetBlock = document.querySelector(".transparent-block")
let quantityBlocks = document.querySelector(".quantity-blocks")
let countBlock = 0
redBlock.addEventListener("mousedown", function(event){
    bulleanFalse = true

})
document.addEventListener("mousemove", function(event){
    if(bulleanFalse){
        let x = event.clientX
        let y = event.clientY
        let minusX = x - centerX
        let minusY = y - centerY
        redBlock.style.transform = `translate(${minusX}px, ${minusY}px)`
    }
})
document.addEventListener("mouseup", function(event){
    if(bulleanFalse){
        bulleanFalse = false
    if(redBlock.style.transform = `translate(950px, 100px)`){
        countBlock++
        quantityBlocks.textContent = countBlock
        redBlock.style.transform = `translate(0px, 0px)`
    }
}
})