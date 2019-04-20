const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require('moment');
const client = new Discord.Client();
const db = require('quick.db');
require('moment-duration-format');
const bot = new Discord.Client({disableEveryone: true});

require("./functions.js")(bot);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.afk = new Map();

module.exports = {
  bot: bot
};

bot.login(botconfig.token);