import {
    getTypes, 
    getDragons, 
    getInventory, 
    calculateModifier, 
    calculatePoints 
  } from './controller.js'
  
  
function init() {
    render()
    }

    const nav = document.querySelector('.dragons-list')
    const inventory = document.querySelector('.inventory')
    const modifier = document.querySelector('.modifier')
    const points = document.querySelector('.points')
    const display = document.querySelector('.display')
  
  function listTemplate(types) {
    
        // data transformation
        const typesArray = types.map(type => {
          return `
          <button onclick="spawnDragon('${type}')">
            ${type}
          </button>`
        })
    
        return typesArray.join('')
      }

  function displayTemplate(dragons) {    
    
    const dragonsArray = dragons.map(dragon => {
    
      return `<div class="${dragon.type} dragon-container">
    <h1>${dragon.type} Dragon</h1>
    <progress max="${dragon.hp}" value="${dragon.hp - dragon.clicks}"></progress>
    <div class="clicks">${dragon.hp - dragon.clicks}</div>
    <button class="dragon" onclick="updateDragon(${dragon.timestamp}, 'increment')">
      ${dragon.icon}
      ${dragon.loot}
    </button>
    </div>
      `
    })
    
    return dragonsArray.join('')
    }

  function inventoryTemplate(inventory) {
     return inventory.map(item => `
     <span class="loot">${item}</span>
    `)
  }
  
  export function render() {
      nav.innerHTML = listTemplate(getTypes())
      display.innerHTML = displayTemplate(getDragons())
      inventory.innerHTML = inventoryTemplate(getInventory())
      modifier.innerText = calculateModifier(getInventory())
      points.innerText = calculatePoints(getInventory())
    }
  