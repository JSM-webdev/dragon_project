const nav = document.querySelector('.dragons-list')
const display = document.querySelector('.display')

const dragonTypes = ['fire', 'water', 'earth', 'air', 'ether', 'tree']

nav.innerHTML = dragonTypes.map(type => {
    return `<button onclick="controller.spawnDragon('${type}')">${type}</button>`
    }).join('')
const dragons = []

function spawnDragon(type) {
    const dragon = dragonFactory(type)
    dragons.push(dragon)
    rerender()
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



