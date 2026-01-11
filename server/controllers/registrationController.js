const registrationModel = require("../models/registrationModel");
const registrationController = async(req,res)=>{
    try {
        const saved = await registrationModel.create(req.body)
        res.status(201).json(saved)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = registrationController