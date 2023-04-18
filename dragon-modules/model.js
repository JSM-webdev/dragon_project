import { calculateModifier, updateInventory } from './controller.js'
export const inventory = []
export let dragons = []
    // loot: {fire: .10, iceballs: 0.25, wind: 0.25, tree: 0.25, mud: 0.25}
export const dragonTypes = ['fire', 'water', 'earth', 'air', 'ether', 'tree']

function dragonFactory(type) {
      return {
        type: type,
        clicks: 0,
        cssClass: `.${type}`,
        icon: '🐉',
        timestamp: Date.now(),
        loot: (Math.random() + 0.25 < 0.5) ? '🗡️' : '💰', 
        hp: Math.floor(((Math.random() + 0.2) * 20))
    }
}
export function addDragon(type) {
  dragons.push(dragonFactory(type))
}

export function removeDragon(timestamp) {
  dragons = dragons.filter(dragon => dragon.timestamp !== timestamp)
}

export function increment(timestamp) {
  const target = dragons.find(dragon => dragon.timestamp === timestamp)
  target.clicks += 1 + calculateModifier(inventory)
  if (target?.hp - target?.clicks <= 0) {
    updateInventory(target?.loot, timestamp)
    removeDragon(timestamp)
  }
}

export function addToInventory(loot) {
  if(loot) inventory.push(loot)
}

