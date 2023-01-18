const view = {
     nav:  document.querySelector('.dragons-list'),
     display: document.querySelector('.display'),
     listTemplate(types) {
            return types.map(type => {
            return `<button onclick="controller.spawnDragon('${type}')">${type}</button>`
            }).join('')
     },
     displayTemplate(dragons) {
        return dragons.map(dragon => {
            return `<div class="${dragon.type} dragon-container">
            <h1>${dragon.type} Dragon</h1>
            <button class="dragon" onclick="controller.updateDragon(${dragon.timestamp}, 'increment')")>${dragon.type}🐉</button>
            <span class="clicks">${dragon.clicks}</span>
            </div>
            `
        }).join('')
    },
     render() {
        view.nav.innerHTML = view.listTemplate(controller.getTypes())
        view.display.innerHTML = view.displayTemplate(controller.getDragons())
    }
}
