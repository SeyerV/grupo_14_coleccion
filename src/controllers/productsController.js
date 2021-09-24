const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const productsController = {
    products: (req, res)=>{
        res.render('products')
    },
    detail: (req, res)=>{
        let id = req.params.id;
        let product = products.find(product => product.id === id)
        res.render('detail', { product })
    },
    create: (req, res)=>{
        res.render('productCrud');
    },
    store: (req, res)=>{
        let newProduct = {
            ...req.body,
            image: 'default-image.png',
            id: products[products.length - 1].id + 1
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    },
    edit: (req, res)=>{
        let id = req.params.id;
        let productToEdit = products.find(product => product.id === id);
        res.render('productCrud', {productToEdit});
    },
    update: (req, res)=>{
        let id = req.params.id;
        let productToEdit = products.find(product => product.id === id);

        productToEdit = {
            id: productToEdit.id,
            ...req.body,
            image: productToEdit.image,
        };

        let newProducts = products.map(product=>{
            if(product.id === productToEdit.id){
                return product = {...productToEdit}
            }
            return product;
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        res.redirect('/');
    },
    destroy: (req, res)=>{
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/');
    }
}

module.exports = productsController;