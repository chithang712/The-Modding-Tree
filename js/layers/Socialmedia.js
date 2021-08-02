addLayer("SM", {
    name: "Social Media", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Posts", // Name of prestige currency
    baseResource: "Ideas", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('SM', 12)) mult = mult.times(2)
        if (player.F.unlocked) mult = mult.times((player.F.points).times(player.F.points).add(1))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    upgrades: {
        11: {
            title: "Watch Naomi Iwata media",
            description: "Gain 5 ideas per second.",
            cost() {
                return new Decimal(1)
            },
            effect() {
                return new Decimal(5)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id))+"/s"
            },
            unlocked() {
                return true
            },
        },
        12: {
            title: "Expertized Posting",
            description: "Ideas required for posting is halved",
            cost() {
                return new Decimal(5)
            },
            effect() {
                return new Decimal(0.5)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id))+"x"
            },
            unlocked() {
                return hasUpgrade('SM', 11)
            },
        },
        13: {
            title: "Make some Fan Characters",
            description: "Idea gain is multiplied by the number of Social Media upgrades bought.",
            cost() {
                return new Decimal(10)
            },
            effect() {
                return new Decimal(player.SM.upgrades.length)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id))+"/s"
            },
            unlocked() {
                return hasUpgrade('SM', 12)
            },
        },
        14: {
            title: "Learn from your posts",
            description: "Posts boost idea gain.",
            cost() {
                return new Decimal(20)
            },
            effect() {
                return upgradeEffect('SM', 13).times((player[this.layer].points).add(1))
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id))+"/s"
            },
            unlocked() {
                return hasUpgrade('SM', 13)
            },
        },
    },
    hotkeys: [
        {key: "S", description: "S: Reset for Posts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    passiveGeneration() {return hasUpgrade('F', 11) ? 1 : 0},
    doReset(resettingLayer){ // Triggers when this layer is being reset, along with the layer doing the resetting. Not triggered by lower layers resetting, but is by layers on the same row.
        if(layers[resettingLayer].row > this.row && hasUpgrade('F', 12)) layerDataReset(this.layer, ["upgrades"]) 
    },
})
