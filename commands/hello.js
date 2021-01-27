exports.execute = (message) => {
    message.send(`Привет!`);
};

exports.info = {
    name: /^hello$/ // Название команды
};
