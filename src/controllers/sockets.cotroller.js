import { compile } from 'ejs'
import productDAO from '../dao/products.dao.js'

export const getAll = (req, res) => {
    productDAO.getAll()
    .then(products=>{
        if(products != null){
            res.json({products})
        }else{
            res.json({ status: "Servidor no disponible" })
        }})
    .catch(err=>console.log(err))
}

export const getOne = (req, res) => {
    productDAO.getOne(req.params.bc)
    .then(product => {
        if(product != null)
            res.json({product})
        else
            res.json({status:"Product not found"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const insertProduct = (req, res) => {
    productDAO.insertProduct (req.body)
    .then(result => {
        if(result)
        res.json({status:"Product Saved"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const updateProduct = (req, res) => {
    productDAO.updateProduct (req.params.bc, req.body)
    .then(result => {
        if(result)
            res.json({status:"Product update"})
        else
            res.json({status: "Server unaviable"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}

export const deleteProduct = (req, res) => {
    productDAO.deleteProduct (req.params.bc)
    .then(result => {
        if(result)
            res.json({status:"Product delete"})
        else
            res.json({status: "Server unaviable"})
    })
    .catch(err=>res.json({status: "Server unaviable"}))
}