const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    host: '5.79.70.193',
    user: 'root',
    password: 'IDMrcxUOSoup',
    database: 'importane'
});

db.connect((err => {
    if(err)
    {
        throw err;
    }
    console.log('MySql Connected...');
}));

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get'
    });
});

router.get('/:chproudId', (req, res, next) => {
    
    const id_podgrupe = req.params.chproudId;
    
    let sql = `SELECT * FROM proizvodi WHERE id_podgrupe = ${id_podgrupe}`;
            let query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
            });
});

module.exports = router;