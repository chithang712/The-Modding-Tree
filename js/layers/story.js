// SPECIAL LAYER: STORY
//
// ADDED IN 0.20
addLayer("story", {
    name: "Story", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "📘", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#c08040",
    resource: "Story Chapters", // Name of prestige currency
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: "side", // Row the layer is in on the tree (0 is the first row)
    tabFormat: {
        "I": {
            content: [
                ["display-text",
                    function() { 
                        return '<h2>Chapter 1 - The Event that Started Everything</h2>' 
                    },
                    { 
                        "color": "#dfdfdf"
                    }],
                "blank",
                ["infobox", "one"],
                ["infobox", "two"],
                ["infobox", "three"], 
            ],
        },
    },
    infoboxes: {
        //Chapter 1 starts here
        one: {
            title: "Goodbye, Naomi Iwata",
            body() {
                let text = "It is year 20XX, and you feel as if your life wasn't given to you by birth. You have faced many unlucky events in your life that you are about to give up, but Naomi Iwata's media have saved you from your pain. Naomi Iwata is a famous illustrator, character designer, and film director who works for Milky Cartoon. His notable works include Midnight Horror School, Gregory Horror Show, Pecola, Kick and Slide and much more. However, one day, you heard that Naomi Iwata just died from a serious medical condition, meaning that he can no longer create new animations."
                return text
            },
            unlocked() {
                return true
            },
        },
        two: {
            title: "Awareness",
            body() {
                let text = "After hearing the news of Naomi Iwata's sudden death, you felt you couldn't do anything, and thought that you lost the motivation to live. On the other side, Milky Cartoon was so sad about Naomi Iwata's death that they suddenly dissolved without prior notice or giving details of the dissolving, leaving the Japanese citizens in a massive panic."
                return text
            },
            unlocked() {
                return hasUpgrade('SM', 11)
            },
        },
        three: {
            title: "Showing your ideas",
            body() {
                let text = "Despite the news of Naomi Iwata's death, you still mindlessly post your ideas for the shows that the awesome illustrator, character designer, and film director have created in his life. You really wish that other Naomi Iwata Fans see your work, so you can see whether there are remnants of Naomi Iwata's fans on the internet."
                return text
            },
            unlocked() {
                return hasUpgrade('SM', 13)
            },
        },
    },
    tooltip() {
        return "Story"
    },
    layerShown(){
        return true
    },
    doReset(resettingLayer) {
		let keep = []
		//if (layers[resettingLayer].id = '') layerDataReset("money", keep)
	},
})