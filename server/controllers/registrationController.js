const registrationModel = require("../models/registrationModel");
const sendRegistrationEmail = require("../config/sendBrevoEmail")
const registrationController = async(req,res)=>{
    try {
        const saved = await registrationModel.create(req.body)
        res.status(201).json(saved)
         try {
      await sendRegistrationEmail(
        saved.email,
        saved.name,
        saved.event
      );

      //  Mark emailSent = true
      await registrationModel.findByIdAndUpdate(saved._id, {
        emailSent: true
      });

    } catch (emailError) {
       console.error("Email failed full error:", 
    emailError?.response?.body || emailError
  );
      // emailSent remains false
    }

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports = registrationController