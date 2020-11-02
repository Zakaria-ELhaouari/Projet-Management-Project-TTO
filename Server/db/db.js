const mysql = require('mysql2');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'classicmodels',
	port: 3306
});


let Data = {};

Data.getOrders = () => {
    return new Promise((resolve, reject) => {
		pool.query('SELECT COUNT(*) AS totalOrders FROM orders', (err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results);
		});
	});
}

Data.getRevenues = () => {
    return new Promise((resolve, reject) => {
		pool.query('SELECT SUM(amount) AS Revenues FROM payments', (err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results);
		});
	});
}

Data.getProductSold = () => {
    return new Promise((resolve, reject) => {
		pool.query('SELECT SUM(quantityOrdered) AS Sold FROM orderdetails', (err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results);
		});
	});
}

Data.getAveragePrice = () => {
    return new Promise((resolve, reject) => {
		pool.query('SELECT SUM(buyPrice)/Count(*) AS AveragePrice FROM products', (err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results);
		});
	});
}


module.exports = Data;