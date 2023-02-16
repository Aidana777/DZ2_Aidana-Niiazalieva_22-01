

// let counter = 0;

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
let position = 0;

setInterval(function () {
    position += 3.14 / 70
    box.style.top = `${240 + 237 * Math.cos(position)}px`
    box.style.right = `${242 + 237 * Math.sin(position)}px`
}, 60)