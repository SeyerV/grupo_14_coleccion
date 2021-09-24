// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/search', mainController.search);

router.get('/', mainController.index); 

router.get('*', (req, res)=>{
    res.status(404).render('<h1>404 Not Found</h1>');
});

module.exports = router;
