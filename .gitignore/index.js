const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Hostiles, !test");
	console.log("Le bot est connecté");
})

bot.login("");
