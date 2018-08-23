const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", ()=>{
	console.log("waddup");
});

client.on("message", (message)=> {
	if (message.content.startsWith("ping")) {
		message.channel.send("pong");
	}
});

client.login("NDgyMjA2ODQ5ODcwMDY5Nzcw.DmBo-A.dCE9-rvL1WU1qLrV96bsG4IzDkg");