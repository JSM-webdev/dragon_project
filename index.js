const dragonE1 = document.querySelector('.dragon-container1')
const clickE1 = document.querySelector('.clicks1')

const dragonE2 = document.querySelector('.dragon-container2')
const clickE2 = document.querySelector('.clicks2')

let clicks = 0

dragonE1.addEventListener('click', e => {
    clicks += 1
    clickE1.innerText = clicks
});

let clicks2 = 0

dragonE2.addEventListener('click', e => {
    clicks2 += 1
    clickE2.innerText = clicks2
});


