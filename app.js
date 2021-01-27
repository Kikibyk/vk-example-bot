const { VK } = require('vk-io'); // Подключаем библиотеку
const vk = new VK({ token: "TOKEN" }); // Авторизуемся по токену
const commands = []; // Массив с командами

// Добавление команд из папки commands в массив
require('fs').readdir("./commands/", (err, files) => {
    files.forEach(f => commands.push(require(`./commands/${f}`)));
});

// Событие нового сообщения
vk.updates.on("message_new", async (message) => {
    const command = commands.find(cmd => cmd.info.name.test(message.text)); // Поиск команды
    if(!command) return; // Завершаем функцию, если команда не найдена
    
    message.args = message.text.match(command.info.name); // Получаем аргументы команды
    command.execute(message); // Выполняем код команды
}).start(); // Включаем обработку события
