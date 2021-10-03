const express = require('express');
const router = express.Router();

// Controller Requerido
const productsController = require('../controllers/productsController');

router.get("/cart", productsController.cart);

// Obtener todos los productos
router.get("/", productsController.products); 

// Crear un producto
router.get("/create", productsController.create);
router.post("/", productsController.store);

// Obtener un producto
router.get("/detail/:id", productsController.detail);

// Editar un producto
router.get("/edit/:id", productsController.edit);
router.patch("/edit/:id", productsController.update);

// Eliminar un producto 
router.delete("/delete/:id", productsController.destroy);


module.exports = router;