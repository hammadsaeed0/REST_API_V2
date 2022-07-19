import Joi from 'Joi'
const registerControler = {

  register(req , res , next){
    // Joi Validation
    const registerSchema = Joi.object({
      name : Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      confirmPassword: Joi.ref('password')
    }) 
    // Here we can recieve all the error regarding Validation
    const { error } = registerSchema.validate(req.body);
    // Now we need to catch this error and send it to responce
    if (error) {
      throw error // This is True but the problem is express error handler can't catch error form async function.
    }
  }

}

export default registerControler;
