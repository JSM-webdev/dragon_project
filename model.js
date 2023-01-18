const model = {
    dragons: [],
    dragonTypes: ['fire', 'water', 'earth', 'air'],

    dragonFactory(type) {
      return {
        type: type,
        clicks: 0,
        cssClass: `.${type}`,
        icon: '🐉', //urlHelperFunc(type),
        timestamp: Date.now()
    }
},
    addDragon(type) {
      model.dragons.push(model.dragonFactory(type))
},
    increment(timestamp) {
      target: dragons.find(dragon => dragon.timestamp === timestamp)
      target.clicks += 1
}
}