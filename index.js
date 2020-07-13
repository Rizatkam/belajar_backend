const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
const books=require('./controlers/books');

dotenv.config();

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.get('/',function (req,res){
    res.status(200).send({env:process.env})});
app.listen(port),()=>console.log(`listen ini port ${port}`) 