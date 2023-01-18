// const dragonE1 = document.querySelector('.dragon-container')
// const clickE1 = document.querySelector('.clicks1')

// const dragonE2 = document.querySelector('.dragon-container')
// const clickE2 = document.querySelector('.clicks2')

// let clicks = 0

// dragonE1.addEventListener('click', e => {
    // clicks += 1
    // clickE1.innerText = clicks1
// })

// let clicks2 = 0

// dragonE2.addEventListener('click', e => {
    // clicks2 += 1
    // clickE2.innerText = clicks2
// })

const nav = document.querySelector('.dragons-list')
const display = document.querySelector('.display')

const dragonTypes = ['fire', 'water', 'earth', 'air', 'Ether']

nav.innerHTML = dragonTypes.map(type => {
    return `<button onclick="controller.spawnDragon('${type}')">${type}</button>`
    }).join('')

const dragons = []

function spawnDragon(type) {
    const dragon = dragonFactory(type)
    dragons.push(dragon)
    Rerender()
}

function increment(timestamp) {
    const target = dragons.find(dragon => dragon.timestamp === timestamp)
    target.clicks += 1
    rerender()
}

function rerender() {
    display.innerHTML = templateFactory(dragons)
}

function dragonFactory(type) {
    
    return {
        type: type,
        clicks: 0,
        cssClass: `.${type}`,
        icon: '🐉', //urlHelperFunc(type),
        timestamp: Date.now()
    }
}

function templateFactory(dragons) {
    return dragons.map(dragon => {
        return `<div class="${dragon.type} dragon-container">
        <h1>${dragon.type} Dragon</h1>
        <button class="dragon" onclick="increment(${dragon.timestamp})">${dragon.type}🐉</button>
        <span class="clicks">${dragon.clicks}</span>
        </div>
        `
    }).join('')
}

const urlHelperFunc = (type) => {
    switch(type) {
        case 'water':
            return ''
        case 'fire':
            return ''
        default:
            return '🐉'
    }
}


