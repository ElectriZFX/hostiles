const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
	bot.user.setGame("Hostiles, !test");
	console.log("Le bot est connecté");
})

bot.login("NDc2MDI2MjUxMDMxODcxNDg5.DkohyA.KQUSfj4w7RGCl9d0QHSHQha7YDI");
