const express = require('express');
const router = express.Router();

// Controller Requerido
const productsController = require('../controllers/productsController');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

// Obtener todos los productos
router.get("/", productsController.products); 

// Crear un producto
router.get("/create", productsController.create);
router.post("/", productsController.store);

// Obtener un producto
router.get("/:id", productsController.detail);

// Editar un producto
router.get("/edit/:id", productsController.edit);
router.patch("/edit/:id", productsController.update);

// Eliminar un producto 
router.get("/delete/:id", productsController.destroy);


router.get('/productCart', (req, res)=>{
    res.render('productCart')
});

router.get('/productDetail', (req, res)=>{
    res.render('productDetail')
});

router.get('/productCrud', (req, res)=>{
    res.render('productCrud')
});


module.exports = router;