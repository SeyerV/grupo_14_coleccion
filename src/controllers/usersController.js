const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const controller = {
	register: (req, res)=>{
		res.render('register')
	},
	login: (req, res)=>{
		res.render('login')
	},
};

module.exports = controller;