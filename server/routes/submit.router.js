const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
	let queryText = 'SELECT * FROM "feedback" ORDER BY "date";';
	pool
		.query(queryText)
		.then(result => {
			res.send(result.rows);
		})
		.catch(error => {
			console.log('Error router.get', error);
			res.sendStatus(500);
		});
});

router.post('/submissions', (req, res) => {
	let newFeedback = req.body;
	let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1,$2,$3,$4);`;
	pool
		.query(queryText, [
			newFeedback.feeling,
			newFeedback.understanding,
			newFeedback.support,
			newFeedback.comments,
		])
		.then(result => {
			res.sendStatus(201);
		})
		.catch(error => {
			console.log(`Error adding feedback to database: `, error);
			res.sendStatus(500);
		});
});

module.exports = router;
