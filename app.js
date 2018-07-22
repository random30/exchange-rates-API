const express = require('express')
const app = express()
const mysql = require('mysql')

app.get('/rate/:iso', (req, res) => {
	const connection = mysql.createConnection({
		host: 'den1.mysql4.gear.host',
		user: 'currency',
		password: 'Il8538??NwpF',
		database: 'currency'
	})
	const queryString = "SELECT * FROM currency WHERE iso = ?"
		connection.query(queryString, [req.params.iso], (err, rows, fields) => {
		const rates = rows.map((row) => { return {rate: row.rate} })
		res.json(rates)
		})
})

app.listen(3003, () => {
	console.log("SERVER HAS STARTED")
})