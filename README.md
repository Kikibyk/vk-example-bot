# Начало
Чтобы запустить бота, вам необходимо открыть файл app.js в любом редакторе и вставить токен группы/страницы.

![alt text](https://i.imgur.com/peBXH5j.png)

После открываем PowerShell путём зажатия Shift+ПКМ по пустому месту и вводим туда следующее:
```
• npm i
• node app.js
```

Пишем в группу/странице, откуда вы получали токен, "Привет".
![alt text](https://i.imgur.com/AAXS4Ej.png)

# Как делать свои команды
Чтобы сделать свою команду, достаточно создать файл в папке commands с расширением .js. В созданном файле мы пишем следующее:
```js
exports.execute = (message) => {
	// Код команды. Пример:
	message.send(`Привет!`);
};

exports.info = {
	name: /^название команды$/ // Название команды используя регулярные выражения (https://learn.javascript.ru/regexp-groups)
};
```
