# Discord Bot

![GitHub license](https://img.shields.io/github/license/mavi/discord-bot?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-v8+-green?style=flat-square)

A lightweight and modular Discord bot designed to help manage your community server. Developed using JavaScript and the Discord.js library.

## 🚀 Features

- **Modular Command Handler:** Easily add or remove commands in the `commands/` directory.
- **Event Management:** Automatic event handling via the `handlers/` system.
- **Data Persistence:** Built-in SQLite support for local data storage.
- **Customizable:** Simple configuration via a JSON file.

## 🛠 Installation

Follow these steps to get your bot up and running:

1. **Clone the repository:**

   ``git clone [https://github.com/mavi/discord-bot.git](https://github.com/mavi/discord-bot.git)``

3. **Install dependencies:**

   ``npm install``

5. **Configuration:**
   Update the botconfig.json file with your credentials:

   ``
   {
    "token": "YOUR_BOT_TOKEN",
    "prefix": "!"
   }
   ``

4. **Start the bot:**
   
   ``node index.js``
