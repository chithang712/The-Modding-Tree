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
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    upgrades: {
        11: {
            title: "Watch Naomi Iwata media",
            description: "Gain 1 more idea per second.",
            cost() {
                return new Decimal(1)
            },
            effect() {
                return new Decimal(2)
            },
            effectDisplay() {
                return format(upgradeEffect(this.layer, this.id))+"/s"
            },
            unlocked() {
                return true
            },
        },
    },
    hotkeys: [
        {key: "S", description: "S: Reset for Posts", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})
