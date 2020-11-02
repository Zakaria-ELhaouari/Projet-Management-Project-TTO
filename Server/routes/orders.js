const express = require('express');
const db = require('../db/db');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		let result = await db.getOrders();
		res.json(result);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

module.exports = router;
