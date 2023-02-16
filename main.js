

// const counter = 0;

// timer = setInterval(function () {
//    counter++
//    if (counter >= 0) {
//       id = document.getElementById('seconds')
//       id.innerHTML = counter
//    }
//    if (counter === 60) {
//       clearInterval(timer)
//       alert('Done!!!')
//    }
// }, 50)

const box = document.querySelector('.box');
const block = document.querySelector('.block');
let positionX = 0;
let positionY = 0;
const move = () => {
    if (positionX <= 470) {
        positionX += 16;
        box.style.left = `${positionX}px`;
        setTimeout(move, 100)
    } else if (positionX >= 470 && positionY <= 470) {
        positionY += 16;
        box.style.top = `${positionX}px`;
        setTimeout(move, 100)
    } else if (positionY <= 470 && positionX >= 470) {
        positionX += 16;
        box.style.right = `${positionX}px`;
        setTimeout(move, 100)
    }
}
move()