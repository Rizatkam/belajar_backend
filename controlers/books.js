const{books}=require('../models');

const getAll=async(req,res)=>{
    try{
        const get=await books.findAll();
        return res.status(200).send({
            data:get,
        })
    } catch (err){
        return res.status(400).send({
            message:err.message
        })
    }
}

const createBook=async(req,res)=>{
    try{
        const params=req.body;
        const resp=await books.create(params);
        return res.status(200).send({
            data:resp
        })
    } catch (err){
        return res.status(400).send({
            message:err.message
        })
    }
}
module.exports={
    getAll,
    createBook
}