let modInfo = {
	name: "❚◀RONOS",
	id: "kronos",
	author: "thepaperpilot",
	pointsName: "points",
	discordName: "The Paper Pilot Community Server",
	discordLink: "https://discord.gg/WzejVAx",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players

	offlineLimit: 1,  // In hours
};

// Set your version in num and name
let VERSION = {
	num: "0.1",
	name: "Chapter 2",
};

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Chapter 1 Demo`;

let winText = "Congratulations! You have reached the end and beaten this game, but for now...";

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["onAddPoints"];

function getStartPoints(){
	return new Decimal(modInfo.initialStartPoints);
}

// Determines if it should show points/sec
function canGenPoints(){
	return false;
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) {
		return new Decimal(0);
	}

	let gain = new Decimal(1);
	return gain;
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
	return {
		hqTree: true,
		chapter: 1,
		timeSlots: new Decimal(0),
		usedTimeSlots: new Decimal(0)
	};
}

// Display extra things at the top of the page
var displayThings = [
];

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"));
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600); // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
	if (oldVersion === "0.0") {
		player.chapter = 1;
		player.flowers.points = player.flowers.points.clampMax(1e9);
	}
}