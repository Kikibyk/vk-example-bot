const { VK } = require('vk-io'); // Подключаем библиотеку
const vk = new VK({ token: "TOKEN" }); // Авторизуемся
const commands = []; // Массив с командами

// Добавление команд из папки commands в массив 
require('fs').readdir("./commands/", function(err, files){
    files.forEach(f => {
        commands.push(require(`./commands/${f}`));
    });
});

// Событие нового сообщения
vk.updates.on("message_new", async (message) => {
    if(!message.text) return;

    message.args = message.text.split(" ");
    commands.forEach(async (command) => {
        if (message.text.toLowerCase().indexOf(command.info.name.toLowerCase()) == 0) await command.execute(message);
    });
}).start();