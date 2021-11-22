const express = require('express');
const fs = require('fs');
const cartRouter = require('./cartRouter');//обработчик всех запросов корзины
const app = express();
const path = require('path');

app.use(express.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/api/cart', cartRouter);

const ProductsJSONPath = path.resolve(__dirname, './db/products.json')

app.get('/api/products', (req, res) => {
    fs.readFile(ProductsJSONPath, 'utf-8', (err, data) => {
        if (err) {
            res.send(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});


const catalogJSONPath = path.resolve(__dirname, './db/catalog.json');

app.get('/api/catalog', (req, res) => {
    fs.readFile(catalogJSONPath, 'utf-8', (err, data) => {
        if (err) {
            res.send(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});


const singleJSONPath = path.resolve(__dirname, './db/singleProduct.json');

app.get('/api/singleProduct', (req, res) => {
    fs.readFile(singleJSONPath, 'utf-8', (err, data) => {
        if (err) {
            res.send(404, JSON.stringify({ result: 0, text: err }));
        } else {
            res.send(data);
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listen on port ${port}...`));