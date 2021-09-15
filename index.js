const Discord = require('discord.js')
const { Intents } = Discord
const client = new Discord.Client({
  intents:
  [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_INVITES
  ]
})

var cringe = 0;

const servidores = {
    'server':{
        conection: null,
        dispatcher: null
    }
}

const { token } = require('./config.json')

client.once("ready", () =>{
  console.log('Online')
  client.user.setActivity("Som Online", {type: 'LISTENING'})
})

client.on("messageCreate", async(msg) => {
    if (!msg.guild) return
    if (!msg.content.startsWith('$')) return

    if (msg.content == '$' + 'cringe'){
        msg.channel.send("Sara crinjou: " + cringe + ' vezes')
        cringe += 1
        
    }
})

client.login(token)