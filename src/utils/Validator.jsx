import Joi from "joi";

const registerSchema = Joi.object({
    userName: Joi.string()
    // .min(10)
    .required()
    .messages({
        "string.empty": "username is required",
        // "string.min": "Username must be at least 6 characters long",
    }),
    email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({
        "string.empty": "email is required",
        "string.email": "Must be a valid email address",
    }),
    password: Joi.string()
        .pattern(/^[0-9a-zA-z]{6,}$/)
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.pattern":
                "Password must contain a-z A-Z 0-9 and must be least 6 characters",
        }),
    confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({
        "string.empty": "Confirm Password is required!!",
        "any.only": "Password and Comfirm Password is not match",
    }),
});




const validateRegister = (input) => {
    const { error } = registerSchema.validate(input, {
        abortEarly: false
    })
    // console.log(error.details)
    if (error) {
        const formatError = error.details.reduce((prev, curr) => {
            prev[curr.path[0]] = curr.message
            return prev

        }, {})
        return formatError
    }
    return null

}




export default validateRegister
