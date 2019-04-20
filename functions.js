const fs = require("fs");

module.exports = (bot) => {

    fs.readdir("./handlers/", (err, files) => {
        if (err) console.error(err);
      
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("There are no events to load...");
        
        console.log(`• ${jsfiles.length} adet event yükleniyor...`);
        
        jsfiles.forEach((f, i) => {
            require(`./handlers/${f}`);
            console.log(`${f} dosyası yüklendi!`); // ${i + 1}: ${f} dosyası yüklendi!
        });
    });

    fs.readdir("./commands/", (err, files) => {
        if(err) console.log(err);

        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.lenght <= 0) return console.log("Cloudn't find commands.");

        console.log(`• ${jsfile.length} adet komut yükleniyor...`);      
      
        jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} dosyası yüklendi!`);
        bot.commands.set(props.help.name, props);
  });
});

};