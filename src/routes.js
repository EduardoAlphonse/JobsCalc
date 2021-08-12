const express = require('express');

const routes = express.Router();

// definir caminho de views
const views = __dirname + '/views/';

const profile = {
	name: 'Eduardo',
	avatar: 'https://avatars.githubusercontent.com/u/43072438?v=4',
	'monthly-budget': 3000,
	'days-per-week': 5,
	'hours-per-day': 5,
	'vacation-per-year': 4,
};

// usar o método render da response, passando o caminho do arquivo html para ser renderizado e entregue
routes.get('/', (req, res) => res.render(views + 'index', { profile }));
routes.get('/job', (req, res) => res.render(views + 'job'));
routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'));
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile }));

module.exports = routes;
