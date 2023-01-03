
const dragonEl = document.querySelector('.dragon-container')
const clickEl = document.querySelector('.clicks')

let clicks = 0

dragonEl.addEventListener('click', e => {
    clicks += 1;
    clickEl.innertext = clicks
});

console.log('Clicks of dragons')
