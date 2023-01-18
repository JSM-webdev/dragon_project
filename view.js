const view = {
     nav:  document.querySelector('.dragons-list'),
     display: document.querySelector('.display'),
    displaytemplateFactory(dragons) {
        return dragons.map(dragon => {
            return `<div class="${dragon.type} dragon-container">
            <h1>${dragon.type} Dragon Clickers</h1>
            <button class="dragon" onclick="increment(${dragon.timestamp})">${dragon.type}🐉</button>
            <span class="clicks">${dragon.clicks}</span>
            </div>
            `
        }).join('')
    },
render() {

}    
}
