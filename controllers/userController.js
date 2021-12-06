const connection = require('../connection');

const getUserAll = (req, res) => {
	const sql = 'SELECT * FROM usuarios';
	connection.query(sql, (err, cont) => {
		if(err) console.log('Ha sucedido un error');
		res.render('userAll', {user: cont})
	})
}

const getAddUser = (req, res) => {
	res.render('userAdd')
}

const postAddUser = (req, res) => {
	const data = req.body;
	const sql = `insert into usuarios SET ?`;
	connection.query(sql, data,(err, cont) => {
		if(err) console.log('Ha sucedido un error');
		res.redirect('/user/all');
	})
}

const getDeleteUser = (req, res) => {
	const id = req.params.id;
	const sql = `select * from usuarios where id=${id}`
	connection.query(sql, (err, cont) => {
		if(err) {
			console.log('Ha sucedido un error');
		}
		else {
			res.render('userDelete', {user: cont[0]})
		}
	})
}

const postDeleteUser = (req, res) => {
	const id = req.params.id;
	const sql = `delete from usuarios where id=${id}`;
	connection.query(sql, (err, cont) => {
		if(err) console.log('Ha sucedido un error')
		res.redirect('/user/all')
	})
}

const getUpdateUser = (req, res) => {
	const id = req.params.id;
	const sql = `select * from usuarios where id=${id}`;
	connection.query(sql, (err, cont) => {
		if(err) {
			console.log('Ha ocurrido un error');
			res.redirect('/user/all')
		}
		else {
			res.render('userUpdate', {user: cont[0]})
		}
	})
}

const postUpdateUser = (req, res) => {
	const id = req.params.id;
	const data = req.body;
	const sql = `update usuarios set name='${data.name}', age='${data.age}' where id='${id}'`;
	connection.query(sql, (err, cont) => {
		if(err) console.log('Ha ocurrido un error');
		res.redirect('/user/all');
	})
}



module.exports = {
	getUserAll,
	getAddUser,
	postAddUser,
	getDeleteUser,
	postDeleteUser,
	getUpdateUser,
	postUpdateUser
}
