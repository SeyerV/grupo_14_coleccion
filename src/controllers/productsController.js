const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const productsController = {
    products: (req, res)=>{
        res.render('products', { products })
    },
    detail: (req, res)=>{
        let id = req.params.id;
        let product = products.find(product => product.id == id)
        res.render('productDetail', { product })
    },
    create: (req, res)=>{
        res.render('productCreate');
    },
    store: (req, res)=>{
        let newProduct = {
            id: products[products.length - 1].id + 1,
            ...req.body
        }
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/products');
    },
    edit: (req, res)=>{
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id);
        res.render('productEdit', { productToEdit });
    },
    update: (req, res)=>{
        let id = req.params.id;
        let productToEdit = products.find(product => product.id == id);

        productToEdit = {
            id: productToEdit.id,
            ...req.body,
        };

        let newProducts = products.map(product=>{
            if(product.id == productToEdit.id){
                return product = {...productToEdit}
            }
            return product;
        });
        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        res.redirect('/products');
    },
    cart: (req, res)=>{
        res.render('productCart')
    },
    destroy: (req, res)=>{
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);
        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/products');
    }
}

module.exports = productsController;