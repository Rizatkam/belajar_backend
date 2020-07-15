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
const get_detail_by_id=async(req,res)=>{
    try{
        const params=req.body;
        const resp=await books.findByPk(req.params.id);
        return res.status(200).send({
            data:resp
        })
    } catch (err){
        return res.status(400).send({
            message:err.message
        })
    }

}
const update_by_id=async(req,res)=>{
    try{
        const params=req.body;
        const resp=await books.findByPk(req.params.id);
        if(!resp){
            return res.status(400).send({
                message:'Datane Ora Ono!'
            })}
        resp.set(params);
        resp.save();
        resp.get();
        return res.status(200).send({
            data:resp
        })
    } catch (err){
        return res.status(400).send({
            message:err.message
        })
    }

}
const delete_by_id=async(req,res)=>{
    try{
        const params=req.body;
        const resp=await books.findByPk(req.params.id);
        if(!resp){
            return res.status(400).send({
                message:'Datane Ora Ono!'
            })}
        resp.destroy();
        resp.save();
        resp.get();
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
    createBook,
    get_detail_by_id,
    update_by_id,
    delete_by_id
}