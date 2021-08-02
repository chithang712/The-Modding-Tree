addLayer("F", {
    name: "Fans", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    branches: ['SM'],
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(250), // Can be a function that takes requirement increases into account
    resource: "Naomi Iwata Fans", // Name of prestige currency
    baseResource: "Posts", // Name of resource prestige is based on
    baseAmount() {return player.SM.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    milestones: {
    },
    upgrades: {
        11: {
            title: "Get fans to automate posting",
            description: "Gain 100.00% of Post Reset reward per second.",
            cost() {
                return new Decimal(1)
            },
            unlocked() {
                return true
            },
        },
        12: {
            title: "Don't forget what you learnt",
            description: "Fans reset does not reset Social Media upgrades.",
            cost() {
                return new Decimal(2)
            },
            unlocked() {
                return hasUpgrade('F', 11)
            },
        },
    },
    hotkeys: [
        {key: "F", description: "F: Reset for Supporters", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){
        return player.SM.points.gte(20) || player.F.unlocked
      },
})
