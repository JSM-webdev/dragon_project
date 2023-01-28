import { render } from './view.js'
import { 
  dragons, 
  dragonTypes, 
  inventory, 
  addDragon, 
  increment, 
  addToInventory, 
  removeDragon
} from './model.js'

export function getDragons() {
    return dragons
  }
export function getTypes() {
    return dragonTypes
  }
export function getInventory() {
  return inventory
}

function spawnDragon(type) {
    addDragon(type)
    render()
  }

function updateDragon(timestamp, command) {
    switch(command) {
      case 'increment': 
        increment(timestamp)
        break;
      default:
        break;
    }
    render()
  }

export function updateInventory(loot, timestamp) {
  addToInventory(loot)
  removeDragon(timestamp)
  render()
}

export function calculateModifier () {
  const modifier = inventory.filter(item => item === '🗡️').length
  return modifier
}

export function calculatePoints () {
  const points = inventory.filter(item => item === '💰').length
  return points
}

window.spawnDragon = spawnDragon
window.updateDragon = updateDragon

render()
