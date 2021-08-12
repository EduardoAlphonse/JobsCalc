const express = require('express');
const routes = require('./routes');

const server = express();

// usando template engine
server.set('view engine', 'ejs');

// servir arquivos estáticos
server.use(express.static('public'));

// usar rotas
server.use(routes);

const port = process.env.PORT || 3000;

server.listen(port, () => {
	console.log(`Server running on port: ${port}..`);
});
