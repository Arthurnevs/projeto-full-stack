const User = require('../Models/User')
const bcrypt = require('bcrypt')

async function hash(password){
    try{
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(password,salt)
        return encryptedPassword
    }catch(err){
        return err
    }
} 

module.exports = {
    
    async create(req,res){
        
        const{ email, password } = req.body

        console.log(email,password)

        try{

            const userJaExiste = await User.findOne({ email })

            if(userJaExiste){
                return res.status(400).send({message: "Email ja cadastrado"})
            }
            
            const hashPassword = await hash(password) 

            const createdUser = await User.create({
                email,
                password: hashPassword,
            })
            return res.status(201).send(createdUser)
        } catch(err){
            return res.status(400).send(err)
        }
    }
}