const king = document.querySelector('.chess-piece')
const squares = document.querySelectorAll('.square')
const info = document.getElementById('info')

king.addEventListener('dragstart', dragStart)
king.addEventListener('drag', dragging)
squares.forEach(square => {
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
    square.addEventListener('dragenter', dragEnter)
    square.addEventListener('dragleave', dragLeave)

})

let beingDragged
function dragging(){
    info.textContent = 'You are Dragging a ' + beingDragged.id
}

function dragStart(e){
    beingDragged = e.target
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.target.classList.add('highlight')
}

function dragLeave(e){
    
    setTimeout(() => {
        e.target.classList.remove('highlight')
    }, 100);
} 


function dragDrop(e){
    e.target.append(beingDragged)
    console.log(e.target)
}
