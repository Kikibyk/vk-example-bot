exports.execute = (message) => {
    message.send(`Привет!`);
};

exports.info = {
    name: /^привет|ку|здравствуй|hello$/i // Название команды используя регулярные выражения (https://learn.javascript.ru/regexp-groups)
};
