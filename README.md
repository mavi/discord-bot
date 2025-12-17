# Discord Bot

![Status](https://img.shields.io/badge/Status-Archived-red?style=flat-square)
![Node.js](https://img.shields.io/badge/Node.js-v8+-green?style=flat-square)

A lightweight and modular Discord bot designed to help manage your community server. Developed using JavaScript and the Discord.js library.

## **🚀 Features**

- **Modular Command Handler:** Easily add or remove commands in the ``commands/`` directory.
- **Event Management:** Automatic event handling via the ``handlers/`` system.
- **Data Persistence:** Built-in SQLite support for local data storage.
- **Customizable:** Simple configuration via a ``botconfig.json`` file.

## **🛠 Installation**

1. **Clone the repository:**

   ``git clone https://github.com/mavi/discord-bot.git``

2. **Install dependencies:**

   ``npm install``

3. **Configuration:**

   Update the ``botconfig.json`` file with your credentials:

   ``
   {
    "token": "YOUR_BOT_TOKEN",
    "prefix": "!"
   }
   ``

4. **Start the bot:**
   
   ``node index.js``

## **📂 Structure**

- ``commands/`` - Bot command logic.
- ``handlers/`` - Command and event loaders.
- ``functions.js/`` - Utility functions.
- ``botconfig.json`` - Configuration settings.

## **📄 License**

This project is open-source and available for educational use.
