const controller = {
    getDragons() {
        return model.dragons
    },
    getTypes() {
        return model.dragonTypes
    },
    spawnDragon(type) {
        model.addDragon(type)
        view.render()
    },
    updateDragon(timestamp, command) {
        switch(command) {
            case 'increment':
                model.increment(timestamp)
                break;
                default:
                break;
        }
        render()
    }
}