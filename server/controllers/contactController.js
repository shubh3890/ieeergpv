const contactModel = require("../models/contactModel");
const contactController = async (req,res)=>{
    try {
        const saved = await contactModel.create(req.body);
        res.status(201).json(saved)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = contactController