const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const db = mysql.createConnection({
    host: '*',
    user: '*',
    password: '*',
    database: '*'
});

db.connect((err => {
    if(err)
    {
        throw err;
    }
    console.log('MySql Connected...');
}));

router.get('/nesto', (req, res, next) => {
    res.status(200).json({
        message: 'get'
    });
});

router.get('/getprod/:chprodId', (req, res, next) => {
    
    const id_podgrupe = req.params.chprodId;
    
    let sql = `SELECT * FROM proizvodi WHERE id_podgrupe = ${id_podgrupe}`;
            let query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
            });
});


router.get('/getchgropu/:name', (req, res, next) => {
    
    const name_chg = req.params.name;

    let sql = "SELECT * FROM podgrupe WHERE ime = '" + name_chg + "'";
            let query = db.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
            });
});

module.exports = router;
