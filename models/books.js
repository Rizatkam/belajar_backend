const sequelize=require ('sequelize');
const connection=require ('../config/sequelize');
const Sequelize  = require('sequelize');

class Model extends Sequelize.Model{};

Model.init(
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        judul:Sequelize.STRING(128),
        deskripsi:Sequelize.STRING(256),
        harga:Sequelize.INTEGER(11),
        author:Sequelize.STRING(256),
        isbn_no:Sequelize.STRING(128),
        created_at:Sequelize.DATE,
        updated_at:Sequelize.DATE,
        deleted_at:Sequelize.DATE,
    },{
        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        freezeTableName:true,
        timestamps:true,
        paranoid:true,
        underscored:true,
        sequelize:connection,
        modelName:'books',
        tableName:'books'
    }
)
module.exports=Model