require("dotenv").config();
const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env.TOKEN;

client.on("ready", () => {
  console.log(`Ready user ${client.user.tag}`);
});

client.on('message', (msg) => {
    if (msg.content === '!melo') {
        msg.channel.send('Es el mejor de FUSKILL lejos y firulais el más horrible');
    }

    if(msg.content === '!churry'){
        msg.channel.send('Es el brujo del equipo, predice cuando vamos a perder a partir de comentarios mufas !!');
    }

    if(msg.content === '!martinez'){
        msg.channel.send('Mira este video https://www.youtube.com/watch?v=bgTeRN5KCTA&ab_channel=TheJosee1996');
    }
});

client.login(token);