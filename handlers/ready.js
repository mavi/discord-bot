const {bot} = require('../index');
const config = require("../botconfig.json");
const moment = require('moment');

bot.on("ready", async() => {
  
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Flash Aktif! • Prefix: ${config.prefix} • Version: ${config.version}`);
    if (config.activity.streaming == true) {
        bot.user.setActivity(config.activity.game, {
            url: 'https://twitch.tv/blewkz'
        });
    } else {
        bot.user.setActivity(config.activity.game, {
            type: 'PLAYING'
        }); //PLAYING, LISTENING, WATCHING
        bot.user.setStatus('dnd'); // dnd, idle, online, invisible
    };
  
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ` + `Flash BOT ` + bot.guilds.size + ` Adet Sunucuya ve ` + bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` Kullanıcıya Erişiyor!`);
});
