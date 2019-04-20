const {bot} = require('../index');
const botconfig = require("../botconfig.json");
const Discord = require("discord.js");
const db = require('quick.db');

bot.on("message", async message => {
  if(message.author.bot) return;
  if (message.channel.type === "dm"){ 
    const dmchannel = bot.channels.find("name", "out-dm-log");
    const dmlog = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`${message.content}`)
    return dmchannel.sendEmbed(dmlog) };
    let prefix = botconfig.prefix;
    let version = botconfig.version;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
  
  
  if(message.content === `sa`){
  return message.reply("as")
  };
  
  if(message.content === `Sa`){
    return message.reply("As")
  };
  
  if(message.content === `selam`){
    return message.reply("selam")
  };
  
  if(message.content === `slm`){
    return message.reply("slm")
  };
  
  if(message.content === `merhaba`){
    return message.reply("merhaba")
  };
  
  if(message.content === `mrb`){
    return message.reply("mrb")
  };
  
  });