const express = require('express')
const getProducts = require('./getProducts')

const app = express()
app.use(express.json())

app.listen(4040, () => console.log('Server running on 4040'))

app.get('/api/products', getProducts.getProducts)
app.get('/api/product/:id', getProducts.getProduct)
