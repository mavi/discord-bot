const Discord = require('discord.js');
const client = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (client, message) => {
  if (message.author.id != "335725474984755200") return message.channel.send("Bunun için yetkin yok.");

     message.channel.send(
            randomstring.generate({
            length: 12,
}))
};

exports.help = {
  name: 'randomşifre',
  description: 'randomşifre gösterir.',
  usage: 'randomşifre'
};