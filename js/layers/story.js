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
                let text = "It is year 20XX, and you feel as if your life wasn't given to you by birth. You have faced many unlucky events in your life that you are about to give up, but Naomi Iwata's media have saved you from your pain. However, one day, you heard that Naomi Iwata just died from a serious medical condition, meaning that he can no longer create new animations."
                return text
            },
            unlocked() {
                return true
            },
        },
        two: {
            title: "Awareness",
            body() {
                let text = "After hearing the news of Naomi Iwata's sudden death, you felt you couldn't do anything, and thought that you lost the motivation to live. On the other side, Milky Cartoon was so sad about Naomi Iwata's death that they suddenly dissolved without prior notice, leaving the Japanese citizens in a massive panic."
                return text
            },
            unlocked() {
                return hasUpgrade('money', 11)
            },
        },
        three: {
            title: "Continuation Possible?",
            body() {
                let text = "Thinking that money could solve anything, you opened your favorite IDE and started making a site for a company aimed for the Naomi Iwata cartoons' re-debuts. The creation of the new funding site needed hours of work, but you thought that it was a great step towards the re-debut of multiple Naomi Iwata media. It could also be a chance for you to be more recognized by the world. You were so tired that you immediately went to sleep with feelings of satisfaction, sadness and uncertainty combined."
                return text
            },
            unlocked() {
                return hasUpgrade('money', 13)
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