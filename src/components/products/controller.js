//CRUD

import * as DB from "../../db/index2"

export const findAll = (req,res) => {
    return res.json(
        DB.findAll()
    )
}

export const findOne = (req,res) => {
    const { id } = req.params;

    return res.json({
        ok:true,
        data: DB.findOne(id)
    })
}

export const create = (req,res) =>{
    const { body } = req;

    DB.store(body);
    return res.status(201).json({
        ok:true,
        data: "Product created"
    })
}

export const update = (req, res) => {
    const { id } =req.params;
    const { body } =req;

    DB.update(id,body);

    return res.status(200).json({
        ok:true,
        data:"Product updated"
    })
}

export const remove = (req, res) => {
    const { id } =req.params;

    DB.remove(id);

    return res.json({
        ok: true,
        data: "Product delete"
    })
}