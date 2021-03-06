const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mongoDB = 'mongodb+srv://admin:admin@cluster0-ky0ff.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const productsSchema = new Schema({
    AOF:String,
    Category: String,
    Name : String,
    Brand: String,
    Price : Number,
    Info: String,
    Type: String,
    Effect: String,
    Finish: String,
    Coverage: String,
    Shades : Array,
    ShadeNames : Array,
    Image: String,
    Formation: String,
    Formula: String,
    Colour: String,

})

const ProductsModel = mongoose.model('products', productsSchema);

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
}); 

  //For retrieving
app.get('/api/products', (req, res) => {

    ProductsModel.find((err, data) => {
        res.json({ products: data });
    })

})  
/* 
 // Displays the type of product
app.get('/api/products/:AOF/:Category', (req, res) => {
    console.log(req.params.Category);
    console.log(req.params.AOF);

    ProductsModel.find({'AOF':req.params.AOF,'Category':req.params.Category}, (error, data) => {
        res.json(data);
    })
})   */ 


 app.get('/api/products/:Name', (req, res) => {
    console.log(req.params.Name);

    ProductsModel.find({'Name':req.params.Name}, (error, data) => {
        res.json(data);
    })
})  



// Displays the brands products
app.get('/api/products/:Brand/:Category', (req, res) => {
    console.log(req.params.Category);
    console.log(req.params.Brand);

    ProductsModel.find({'Brand':req.params.Brand,'Category':req.params.Category}, (error, data) => {
        res.json(data);
    })
})



//Listen
app.listen(port, () => console.log(`Server listening on port ${port}!`))